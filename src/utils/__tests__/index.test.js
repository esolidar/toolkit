/* global expect */
import {
  getEmployeeName, addUrlParam, removeUrlParam, getUrlParam, filterUnique, isCompanyAdmin,
} from '../index';

describe('test utils functions', () => {
  test('should return getEmployeeName', () => {
    const userEmployee = {
      id: 1,
      firstName: 'António',
      lastName: 'Santos',
      work_email: [
        {
          company_id: 1, name: 'António Santos', role: 'admin', department: null, user: null,
        }, {
          company_id: 2, name: 'João Paulo', role: null, department: null, user: null,
        }, {
          company_id: 3, name: 'Manuel Silva', role: null, department: null, user: null,
        },
      ],
    };
    const user = {
      id: 1,
      firstName: 'António',
      lastName: 'Santos',
      work_email: [],
    };
    expect(getEmployeeName(1, userEmployee)).toEqual('António Santos');
    expect(getEmployeeName(2, userEmployee)).toEqual('João Paulo');
    expect(getEmployeeName(3, userEmployee)).toEqual('Manuel Silva');
    expect(getEmployeeName(4, user)).toEqual('António Santos');
  });

  test('call addUrlParam to add url parameter', () => {
    addUrlParam('page', '2');
    addUrlParam('id', '1');
    expect(global.window.location.search).toEqual('?page=2&id=1');
  });

  test('call removeUrlParam to remove url parameter', () => {
    addUrlParam('page', '2');
    addUrlParam('id', '1');
    removeUrlParam('page');
    expect(global.window.location.search).toEqual('?id=1');
  });

  test('should return addUrlParam', () => {
    addUrlParam('page', '2');
    expect(getUrlParam('page')).toEqual('2');
  });

  test('should return array without duplicate keys', () => {
    const array = [{
      id: 1,
      name: 'Name1',
    }, {
      id: 2,
      Name: 'Name2',
    }, {
      id: 1,
      name: 'Name3',
    }];

    const expectArray = [{
      id: 1,
      name: 'Name1',
    }, {
      id: 2,
      Name: 'Name2',
    }];

    filterUnique(array, 'id');
    expect(filterUnique(array, 'id')).toEqual(expectArray);
  });

  test('should return isCompanyAdmin', () => {
    const userWithWorkEmail = {
      id: 1,
      firstName: 'António',
      lastName: 'Santos',
      work_email: [
        {
          company_id: 1, name: 'António Santos', role: 'admin', department: null, user: null,
        }, {
          company_id: 2, name: 'João Paulo', role: 'owner', department: null, user: null,
        }, {
          company_id: 3, name: 'Manuel Silva', role: null, department: null, user: null,
        },
      ],
    };

    const userWithWorkEmailEmpty = {
      id: 1,
      firstName: 'António',
      lastName: 'Santos',
      work_email: [],
    };

    const withoutWithWorkEmail = {
      id: 1,
      firstName: 'António',
      lastName: 'Santos',
    };

    expect(isCompanyAdmin(1, userWithWorkEmail)).toBe(true);
    expect(isCompanyAdmin(2, userWithWorkEmail)).toBe(true);
    expect(isCompanyAdmin(3, userWithWorkEmail)).toBe(false);
    expect(isCompanyAdmin(4, userWithWorkEmail)).toBe(false);
    expect(isCompanyAdmin(1, userWithWorkEmailEmpty)).toBe(false);
    expect(isCompanyAdmin(1, withoutWithWorkEmail)).toBe(false);
  });
});
