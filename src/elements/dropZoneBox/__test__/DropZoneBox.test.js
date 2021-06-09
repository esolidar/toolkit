import React, { createRef } from 'react';

import Dropzone from 'react-dropzone';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { fireEvent, render, cleanup, act, waitFor } from '@testing-library/react';
import DropZoneBox from '../index';

function createFile(name, size, type) {
  const file = new File([], name, { type });
  Object.defineProperty(file, 'size', {
    get() {
      return size;
    },
  });
  return file;
}

function createDtWithFiles(files = []) {
  return {
    dataTransfer: {
      files,
      items: files.map(file => ({
        kind: 'file',
        size: file.size,
        type: file.type,
        getAsFile: () => file,
      })),
      types: ['Files'],
    },
  };
}

const dispatchEvt = (node, type, data) => {
  const event = new Event(type, { bubbles: true });
  if (data) {
    Object.assign(event, data);
  }
  fireEvent(node, event);
};

function fireDragEnter(node, data) {
  dispatchEvt(node, 'dragenter', data);
}

function fireDragOver(node, data) {
  dispatchEvt(node, 'dragover', data);
}

function fireDragLeave(node, data) {
  dispatchEvt(node, 'dragleave', data);
}

function fireDrop(node, data) {
  dispatchEvt(node, 'drop', data);
}

async function flushPromises(rerender, ui) {
  await act(() => waitFor(() => rerender(ui)));
}

const props = {
  maxSize: 5000000,
  onSelect: () => {},
  errorMessages: [],
};

describe('component DropZoneBox', () => {
  it('renders component dropzone', () => {
    const wrapper = shallow(<DropZoneBox {...props} />);
    expect(wrapper).toHaveLength(1);
  });
});

describe('useDropzone() hook', () => {
  let files;
  let images;

  beforeEach(() => {
    files = [createFile('file1.pdf', 5000000, 'application/pdf')];
    images = [
      createFile('cats.gif', 6000000, 'image/gif'),
      createFile('dogs.gif', 7000000, 'image/jpeg'),
    ];
  });

  afterEach(cleanup);

  describe('behavior', () => {
    it('renders the root and input nodes with the necessary props', () => {
      const { container } = render(
        <Dropzone>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
            </div>
          )}
        </Dropzone>
      );
      expect(container.innerHTML).toMatchSnapshot();
    });

    it('sets {accept} prop on the <input>', () => {
      const accept = 'image/jpeg';
      const { container } = render(
        <Dropzone accept={accept}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
            </div>
          )}
        </Dropzone>
      );

      const input = container.querySelector('input');

      expect(input).toHaveAttribute('accept', accept);
    });

    it('updates {multiple} prop on the <input> when it changes', () => {
      const { container, rerender } = render(
        <Dropzone accept="image/jpeg">
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
            </div>
          )}
        </Dropzone>
      );

      expect(container.querySelector('input')).toHaveAttribute('accept', 'image/jpeg');

      rerender(
        <Dropzone accept="image/png">
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
            </div>
          )}
        </Dropzone>
      );

      expect(container.querySelector('input')).toHaveAttribute('accept', 'image/png');
    });
  });

  it('updates {multiple} prop on the <input> when it changes', () => {
    const { container, rerender } = render(
      <Dropzone multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
    );

    expect(container.querySelector('input')).not.toHaveAttribute('multiple');

    rerender(
      <Dropzone multiple>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
    );

    expect(container.querySelector('input')).toHaveAttribute('multiple');
  });

  it('terminates drags and drops on elements outside our dropzone', () => {
    render(
      <Dropzone>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
    );

    const dragEvt = new Event('dragover', { bubbles: true });
    const dragEvtPreventDefaultSpy = jest.spyOn(dragEvt, 'preventDefault');
    fireEvent(document.body, dragEvt);
    expect(dragEvtPreventDefaultSpy).toHaveBeenCalled();

    const dropEvt = new Event('drop', { bubbles: true });
    const dropEvtPreventDefaultSpy = jest.spyOn(dropEvt, 'preventDefault');
    fireEvent(document.body, dropEvt);
    expect(dropEvtPreventDefaultSpy).toHaveBeenCalled();
  });

  it('permits drags and drops on elements inside our dropzone', () => {
    const { container } = render(
      <Dropzone>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
    );
    const dropzone = container.querySelector('div');

    const dropEvt = new Event('drop', { bubbles: true });
    const dropEvtPreventDefaultSpy = jest.spyOn(dropEvt, 'preventDefault');

    fireEvent(dropzone, dropEvt);
    expect(dropEvtPreventDefaultSpy).toHaveBeenCalled();
  });

  it('should proxy the click event to the input', () => {
    const activeRef = createRef();
    const active = <span ref={activeRef}>I am active</span>;
    const onClickSpy = jest.spyOn(HTMLInputElement.prototype, 'click');

    const { container } = render(
      <Dropzone>
        {({ getRootProps, getInputProps, isFileDialogActive }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isFileDialogActive && active}
          </div>
        )}
      </Dropzone>
    );

    const dropzone = container.querySelector('div');

    fireEvent.click(dropzone);
    const ref = activeRef.current;
    expect(ref).not.toBeNull();
    expect(dropzone).toContainElement(ref);
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('invokes callbacks for the appropriate events', async () => {
    const data = createDtWithFiles(files);

    const props = {
      onDragEnter: jest.fn(),
      onDragOver: jest.fn(),
      onDragLeave: jest.fn(),
      onDrop: jest.fn(),
    };

    const ui = (
      <Dropzone {...props}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
    );
    const { container, rerender } = render(ui);
    const dropzone = container.querySelector('div');

    fireDragEnter(dropzone, data);
    await flushPromises(rerender, ui);
    expect(props.onDragEnter).toHaveBeenCalled();

    fireDragOver(dropzone, data);
    expect(props.onDragOver).toHaveBeenCalled();

    fireDragLeave(dropzone, data);
    expect(props.onDragLeave).toHaveBeenCalled();

    fireDrop(dropzone, data);
    await flushPromises(rerender, ui);
    expect(props.onDrop).toHaveBeenCalled();
  });

  it('filters files according to {maxSize}', async () => {
    const onDropSpy = jest.fn();
    const ui = (
      <Dropzone onDrop={onDropSpy} maxSize={5000000}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
    );
    const { container, rerender } = render(ui);
    const dropzone = container.querySelector('div');

    fireDrop(dropzone, createDtWithFiles(images));
    await flushPromises(rerender, ui);

    expect(onDropSpy).toHaveBeenCalledWith(
      [],
      [
        {
          file: images[0],
          errors: [
            {
              code: 'file-too-large',
              message: 'File is larger than 5000000 bytes',
            },
          ],
        },
        {
          file: images[1],
          errors: [
            {
              code: 'file-too-large',
              message: 'File is larger than 5000000 bytes',
            },
          ],
        },
      ],
      expect.anything()
    );
  });

  test('onDropRejected callback is invoked if some files are rejected', async () => {
    const onDropRejectedSpy = jest.fn();
    const ui = (
      <Dropzone accept="image/*" onDropRejected={onDropRejectedSpy}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
    );
    const { container, rerender } = render(ui);
    const dropzone = container.querySelector('div');

    fireDrop(dropzone, createDtWithFiles(files));
    await flushPromises(rerender, ui);
    expect(onDropRejectedSpy).toHaveBeenCalledWith(
      [
        {
          file: files[0],
          errors: [
            {
              code: 'file-invalid-type',
              message: 'File type must be image/*',
            },
          ],
        },
      ],
      expect.anything()
    );
    onDropRejectedSpy.mockClear();

    fireDrop(dropzone, createDtWithFiles(images));
    await flushPromises(rerender, ui);
    expect(onDropRejectedSpy).not.toHaveBeenCalled();
    onDropRejectedSpy.mockClear();

    fireDrop(dropzone, createDtWithFiles([...files, ...images]));
    await flushPromises(rerender, ui);
    expect(onDropRejectedSpy).toHaveBeenCalledWith(
      [
        {
          file: files[0],
          errors: [
            {
              code: 'file-invalid-type',
              message: 'File type must be image/*',
            },
          ],
        },
      ],
      expect.anything()
    );
  });
});
