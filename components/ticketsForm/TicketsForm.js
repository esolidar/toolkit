"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _reactBootstrap = require("react-bootstrap");

var _reactSelectAsyncPaginate = _interopRequireDefault(require("react-select-async-paginate"));

var _textField = _interopRequireDefault(require("../../elements/textField"));

var _textareaField = _interopRequireDefault(require("../../elements/textareaField"));

var _selectField = _interopRequireDefault(require("../../elements/selectField"));

var _dropZoneBox = _interopRequireDefault(require("../../elements/dropZoneBox"));

var _button = _interopRequireDefault(require("../../elements/button"));

var _loading = _interopRequireDefault(require("../loading"));

var _customModal = _interopRequireDefault(require("../../elements/customModal"));

var _jsxRuntime = require("react/jsx-runtime");

/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable react/jsx-props-no-spreading */
var mapFeatures = {
  auctions: '2',
  crowdfunding: '4',
  tickets: '16'
};

var TicketsForm = function TicketsForm(_ref) {
  var errors = _ref.errors,
      onSubmit = _ref.onSubmit,
      onChange = _ref.onChange,
      statusDefault = _ref.statusDefault,
      status = _ref.status,
      priorityDefault = _ref.priorityDefault,
      priority = _ref.priority,
      disabled = _ref.disabled,
      hideText = _ref.hideText,
      editTicket = _ref.editTicket,
      showAddFilesButtton = _ref.showAddFilesButtton,
      showModalFiles = _ref.showModalFiles,
      toggleModalFiles = _ref.toggleModalFiles,
      searchFiles = _ref.searchFiles,
      search = _ref.search,
      onSubmitComment = _ref.onSubmitComment,
      onChangeComment = _ref.onChangeComment,
      addComment = _ref.addComment,
      showCommentForm = _ref.showCommentForm,
      uploadedFiles = _ref.uploadedFiles,
      files = _ref.files,
      loadingFiles = _ref.loadingFiles,
      onChangeFile = _ref.onChangeFile,
      onDrop = _ref.onDrop,
      removeFile = _ref.removeFile,
      showFeaturesOptions = _ref.showFeaturesOptions,
      featureDefault = _ref.featureDefault,
      features = _ref.features,
      auctionDefault = _ref.auctionDefault,
      loadOptionsAuctions = _ref.loadOptionsAuctions,
      updateValueAuctions = _ref.updateValueAuctions,
      typeDefault = _ref.typeDefault,
      types = _ref.types,
      loadOptionsUsers = _ref.loadOptionsUsers,
      updateValueUsers = _ref.updateValueUsers,
      showModalSimpleFiles = _ref.showModalSimpleFiles,
      toggleModalSimpleFiles = _ref.toggleModalSimpleFiles,
      assignedDefault = _ref.assignedDefault,
      disabledAssignedSelect = _ref.disabledAssignedSelect,
      disabledFeatureSelect = _ref.disabledFeatureSelect,
      disabledTypeSelect = _ref.disabledTypeSelect,
      disabledStatusSelect = _ref.disabledStatusSelect,
      crowdfundingDefault = _ref.crowdfundingDefault,
      institutionDefault = _ref.institutionDefault,
      loadOptionsCrowdfunding = _ref.loadOptionsCrowdfunding,
      loadOptionsInstitution = _ref.loadOptionsInstitution,
      updateValueCrowdfunding = _ref.updateValueCrowdfunding,
      updateValueInstitution = _ref.updateValueInstitution,
      errorMessages = _ref.errorMessages,
      maxSize = _ref.maxSize,
      updloadFileIsLoading = _ref.updloadFileIsLoading;

  var renderUploadedFiles = function renderUploadedFiles(files) {
    if (files.length > 0) {
      return files.map(function (file, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "attachments-row",
          children: [file.name ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: file.file,
            className: "download-file",
            rel: "noopener noreferrer",
            target: "_blank",
            title: decodeURI(file.name),
            children: decodeURI(file.name)
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            className: "download-file",
            rel: "noopener noreferrer",
            target: "_blank",
            title: decodeURI(file.file.name),
            children: decodeURI(file.file.name)
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: "remove-file",
            onClick: function onClick(e) {
              return removeFile(e, file);
            },
            children: "x"
          })]
        }, index);
      });
    }
  };

  var renderFilesList = function renderFilesList(files, loadingFiles) {
    if (loadingFiles) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "loading-employees",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {})
      });
    }

    if (files.length > 0) {
      return files.map(function (file) {
        var isImage = file.file_type === 'jpg' ? file.file : 'no-image';
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "form-group thumb-box",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "checkbox-label",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "file-thumb form-group",
              style: {
                backgroundImage: "url(" + isImage + ")"
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                type: "checkbox",
                name: "user",
                checked: !!file.checked,
                value: file.id,
                onChange: function onChange(e) {
                  return onChangeFile(e, file);
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "checkbox"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: file.file_type === 'jpg' ? 'thumb-box-hover' : 'thumb-box-file',
                children: decodeURI(file.name)
              })]
            })
          })
        }, file.id);
      });
    }
  };

  var defaultAdditional = {
    page: 1
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: !showCommentForm ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Card, {
        className: "ticketCard",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Card.Body, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
            children: [showFeaturesOptions && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
              sm: 12,
              className: "noPadding",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                sm: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_selectField["default"], {
                  value: featureDefault,
                  onChange: onChange,
                  field: "feature_id",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'tickets.feature',
                    defaultMessage: 'Feature'
                  }),
                  options: features,
                  error: errors.feature_id,
                  required: true,
                  disabled: disabledFeatureSelect
                })
              }), featureDefault && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                sm: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_selectField["default"], {
                  defaultValue: typeDefault,
                  onChange: onChange,
                  field: "type",
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'tickets.type',
                    defaultMessage: 'Type'
                  }),
                  options: types,
                  error: errors.type,
                  required: true,
                  disabled: disabledTypeSelect
                })
              }), featureDefault && featureDefault === mapFeatures.auctions && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                sm: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                    className: "control-label",
                    children: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'tickets.auctions',
                      defaultMessage: 'Auctions'
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSelectAsyncPaginate["default"], {
                    isClearable: true,
                    defaultValue: auctionDefault,
                    cacheOptions: true,
                    placeholder: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'tickets.search.byIdOrTitle',
                      defaultMessage: 'Search by title ou ID...'
                    }),
                    additional: defaultAdditional,
                    loadOptions: loadOptionsAuctions,
                    onChange: updateValueAuctions
                  }), errors.related_feature_id && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "has-error",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: "help-block",
                      children: (0, _reactIntl.useIntl)().formatMessage({
                        id: 'form.required',
                        defaultMessage: 'This field is required.'
                      })
                    })
                  })]
                })
              }), featureDefault && featureDefault === mapFeatures.crowdfunding && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                sm: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                    className: "control-label",
                    children: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'tickets.crowdfunding',
                      defaultMessage: 'Crowdfunding'
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSelectAsyncPaginate["default"], {
                    isClearable: true,
                    defaultValue: crowdfundingDefault,
                    cacheOptions: true,
                    placeholder: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'tickets.search.byIdOrTitle',
                      defaultMessage: 'Search by title ou ID...'
                    }),
                    additional: defaultAdditional,
                    loadOptions: loadOptionsCrowdfunding,
                    onChange: updateValueCrowdfunding
                  }), errors.related_feature_id && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "has-error",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: "help-block",
                      children: (0, _reactIntl.useIntl)().formatMessage({
                        id: 'form.required',
                        defaultMessage: 'This field is required.'
                      })
                    })
                  })]
                })
              }), featureDefault && featureDefault === mapFeatures.tickets && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                sm: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                    className: "control-label",
                    children: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'tickets.institution',
                      defaultMessage: 'Institution'
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSelectAsyncPaginate["default"], {
                    isClearable: true,
                    value: institutionDefault,
                    cacheOptions: true,
                    placeholder: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'tickets.search.byIdOrTitle',
                      defaultMessage: 'Search by title ou ID...'
                    }),
                    additional: defaultAdditional,
                    loadOptions: loadOptionsInstitution,
                    onChange: updateValueInstitution
                  }), errors.related_feature_id && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "has-error",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: "help-block",
                      children: (0, _reactIntl.useIntl)().formatMessage({
                        id: 'form.required',
                        defaultMessage: 'This field is required.'
                      })
                    })
                  })]
                })
              }), assignedDefault && featureDefault !== mapFeatures.tickets && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
                sm: 12,
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                    className: "control-label",
                    children: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'tickets.assigned',
                      defaultMessage: 'Assigned to'
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSelectAsyncPaginate["default"], {
                    isClearable: !disabledAssignedSelect,
                    defaultValue: assignedDefault,
                    cacheOptions: true,
                    placeholder: (0, _reactIntl.useIntl)().formatMessage({
                      id: 'tickets.search',
                      defaultMessage: 'Search here...'
                    }),
                    additional: defaultAdditional,
                    loadOptions: loadOptionsUsers,
                    onChange: updateValueUsers,
                    isOptionDisabled: disabledAssignedSelect
                  }), errors.assignee_id && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "has-error",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: "help-block",
                      children: (0, _reactIntl.useIntl)().formatMessage({
                        id: 'form.required',
                        defaultMessage: 'This field is required.'
                      })
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 12,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
                label: (0, _reactIntl.useIntl)().formatMessage({
                  id: 'project.tickets.title',
                  defaultMessage: 'Title'
                }),
                type: "text",
                onChange: onChange,
                error: errors.title,
                placeholder: (0, _reactIntl.useIntl)().formatMessage({
                  id: 'project.tickets.titlePlaceholder',
                  defaultMessage: 'Title'
                }),
                defaultValue: editTicket.title,
                field: "title",
                required: true
              })
            }), !hideText && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 12,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "form-group",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textareaField["default"], {
                  label: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'project.tickets.text',
                    defaultMessage: 'Description'
                  }),
                  error: errors.text,
                  placeholder: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'project.tickets.textPlaceholder',
                    defaultMessage: 'Enter your issue here.'
                  }),
                  onChange: onChange,
                  field: "text",
                  value: editTicket.text,
                  message: "",
                  required: true
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 6,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_selectField["default"], {
                defaultValue: statusDefault,
                onChange: onChange,
                field: "status",
                label: (0, _reactIntl.useIntl)().formatMessage({
                  id: 'project.tickets.status',
                  defaultMessage: 'Status'
                }),
                options: status,
                error: errors.status,
                required: true,
                disabled: disabledStatusSelect
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 6,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_selectField["default"], {
                defaultValue: priorityDefault,
                onChange: onChange,
                field: "priority",
                label: (0, _reactIntl.useIntl)().formatMessage({
                  id: 'project.tickets.priority',
                  defaultMessage: 'Priority'
                }),
                options: priority,
                error: errors.priority,
                required: true
              })
            }), uploadedFiles.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 12,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  htmlFor: "status",
                  className: "control-label",
                  children: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'project.tickets.files',
                    defaultMessage: 'Files'
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "attachments-box",
                  children: renderUploadedFiles(uploadedFiles)
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
              sm: 12,
              className: "mt-3 d-flex align-items-center justify-content-end",
              children: [showAddFilesButtton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                extraClass: "dark-full float-left",
                onClick: toggleModalFiles,
                text: (0, _reactIntl.useIntl)().formatMessage({
                  id: 'project.tickets.addFiles',
                  defaultMessage: 'Add Files'
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                extraClass: "success-full ml-auto",
                onClick: onSubmit,
                disabled: disabled,
                text: (0, _reactIntl.useIntl)().formatMessage({
                  id: 'Company.department.save',
                  defaultMessage: 'Save'
                })
              })]
            })]
          })
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Card, {
        className: "ticketCard",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Card.Body, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Row, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 12,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_textareaField["default"], {
                label: (0, _reactIntl.useIntl)().formatMessage({
                  id: 'project.tickets.text',
                  defaultMessage: 'Description'
                }),
                error: errors.text,
                placeholder: (0, _reactIntl.useIntl)().formatMessage({
                  id: 'project.tickets.textPlaceholder',
                  defaultMessage: 'Enter your issue here.'
                }),
                onChange: onChangeComment,
                field: "text",
                message: "",
                required: true,
                value: editTicket.text
              })
            }), uploadedFiles.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrap.Col, {
              sm: 12,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  htmlFor: "status",
                  className: "control-label",
                  children: (0, _reactIntl.useIntl)().formatMessage({
                    id: 'project.tickets.files',
                    defaultMessage: 'Files'
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "attachments-box",
                  children: renderUploadedFiles(uploadedFiles)
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactBootstrap.Col, {
              sm: 12,
              className: "mt-3 d-flex align-items-center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                extraClass: "dark-full mr-auto",
                onClick: toggleModalFiles,
                text: (0, _reactIntl.useIntl)().formatMessage({
                  id: 'project.tickets.addFiles',
                  defaultMessage: 'Add Files'
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                extraClass: "dark mr-2",
                onClick: addComment,
                text: (0, _reactIntl.useIntl)().formatMessage({
                  id: 'Company.department.cancel',
                  defaultMessage: 'Cancel'
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
                extraClass: "success-full",
                onClick: onSubmitComment,
                text: (0, _reactIntl.useIntl)().formatMessage({
                  id: 'Company.department.save',
                  defaultMessage: 'Save'
                }),
                disabled: disabled
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_customModal["default"], {
      actionsChildren: /*#__PURE__*/(0, _jsxRuntime.jsx)(_button["default"], {
        extraClass: "success-full",
        onClick: toggleModalFiles,
        text: (0, _reactIntl.useIntl)().formatMessage({
          id: 'project.tickets.addFiles',
          defaultMessage: 'Add Files'
        })
      }),
      bodyChildren: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_dropZoneBox["default"], {
          onSelect: onDrop,
          errorMessages: errorMessages,
          maxSize: maxSize,
          isLoading: updloadFileIsLoading
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
          children: (0, _reactIntl.useIntl)().formatMessage({
            id: 'document.files.modal.fileList',
            defaultMessage: 'File list'
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField["default"], {
          type: "text",
          className: "mb-3",
          onChange: searchFiles,
          placeholder: (0, _reactIntl.useIntl)().formatMessage({
            id: 'project.tickets.searchFiles',
            defaultMessage: 'Pesquisar por nome'
          }),
          defaultValue: search,
          field: "search"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "files-list checkbox-inline",
          children: renderFilesList(files, loadingFiles)
        })]
      }),
      dividerBottom: true,
      dividerTop: true,
      onHide: toggleModalFiles,
      show: showModalFiles,
      size: "lg",
      title: (0, _reactIntl.useIntl)().formatMessage({
        id: 'project.tickets.addFiles',
        defaultMessage: 'Add Files'
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_customModal["default"], {
      bodyChildren: /*#__PURE__*/(0, _jsxRuntime.jsx)(_dropZoneBox["default"], {
        onSelect: onDrop,
        errorMessages: errorMessages,
        maxSize: maxSize,
        isLoading: updloadFileIsLoading
      }),
      dividerTop: true,
      onHide: toggleModalSimpleFiles,
      size: "lg",
      show: showModalSimpleFiles,
      title: (0, _reactIntl.useIntl)().formatMessage({
        id: 'tickets.modal.simpleFiles.title',
        defaultMessage: 'Add Attachment'
      })
    })]
  });
};

TicketsForm.propTypes = process.env.NODE_ENV !== "production" ? {
  onSubmit: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  errors: _propTypes["default"].object,
  statusDefault: _propTypes["default"].string,
  status: _propTypes["default"].array,
  priorityDefault: _propTypes["default"].string,
  priority: _propTypes["default"].array,
  disabled: _propTypes["default"].bool,
  hideText: _propTypes["default"].bool,
  editTicket: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].array]),
  showAddFilesButtton: _propTypes["default"].bool,
  showModalFiles: _propTypes["default"].bool,
  toggleModalFiles: _propTypes["default"].func,
  searchFiles: _propTypes["default"].func,
  search: _propTypes["default"].string,
  onSubmitComment: _propTypes["default"].func,
  onChangeComment: _propTypes["default"].func,
  addComment: _propTypes["default"].func,
  showCommentForm: _propTypes["default"].bool,
  uploadedFiles: _propTypes["default"].array,
  files: _propTypes["default"].array,
  loadingFiles: _propTypes["default"].bool,
  onChangeFile: _propTypes["default"].func,
  onDrop: _propTypes["default"].func,
  removeFile: _propTypes["default"].func,
  showFeaturesOptions: _propTypes["default"].bool,
  featureDefault: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  features: _propTypes["default"].array,
  assignedDefault: _propTypes["default"].object,
  auctionDefault: _propTypes["default"].object,
  loadOptionsAuctions: _propTypes["default"].func,
  updateValueAuctions: _propTypes["default"].func,
  typeDefault: _propTypes["default"].string,
  types: _propTypes["default"].array,
  loadOptionsUsers: _propTypes["default"].func,
  updateValueUsers: _propTypes["default"].func,
  showModalSimpleFiles: _propTypes["default"].bool,
  toggleModalSimpleFiles: _propTypes["default"].func,
  disabledAssignedSelect: _propTypes["default"].func,
  disabledFeatureSelect: _propTypes["default"].bool,
  disabledTypeSelect: _propTypes["default"].bool,
  disabledStatusSelect: _propTypes["default"].bool,
  crowdfundingDefault: _propTypes["default"].object,
  institutionDefault: _propTypes["default"].object,
  loadOptionsCrowdfunding: _propTypes["default"].func,
  loadOptionsInstitution: _propTypes["default"].func,
  updateValueCrowdfunding: _propTypes["default"].func,
  updateValueInstitution: _propTypes["default"].func,
  errorMessages: _propTypes["default"].array,
  maxSize: _propTypes["default"].number,
  updloadFileIsLoading: _propTypes["default"].bool
} : {};
var _default = TicketsForm;
exports["default"] = _default;
module.exports = exports.default;