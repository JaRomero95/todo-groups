import Vuex from 'vuex';
import {shallowMount, createLocalVue} from '@vue/test-utils';
import GroupShow from '@/pages/GroupShow.vue';
import stubs from '../support/stubs';

const localVue = createLocalVue();
localVue.use(Vuex);

const markAllAsIncompleteButton = '[data-test="mark-all-tasks-as-incomplete"]';
const confirmDialogSelector = '[data-test="confirm-dialog"]';

describe('GroupShow', () => {
  let wrapper;
  let actions;

  beforeEach(() => {
    actions = {
      loadGroup: jest.fn(),
      deleteGroup: jest.fn(),
      markTaskAsIncomplete: jest.fn(),
    };

    const store = new Vuex.Store({
      actions,
      getters: {
        group: jest.fn(() => ({
          cards: [
            {id: 11},
            {id: 12},
          ]
        })),
        loadingGroup: jest.fn(),
      },
    });

    const mocks = {
      $route: {
        params: {
          id: 19
        }
      }
    };

    wrapper = shallowMount(GroupShow, {localVue, store, stubs, mocks});
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mark all tasks as incomplete button open confirm dialog', () => {
    it('invoke markTaskAsIncomplete for each task', () => {
      wrapper.find(markAllAsIncompleteButton).vm.$emit('click');
      const dialog = wrapper.find(confirmDialogSelector);
      expect(dialog.exists()).toBeTruthy();
    });
  });

  describe('markAllTasksAsIncomplete', () => {
    it('invoke markTaskAsIncomplete for each task', () => {
      wrapper.setData({showConfirmDialog: true});
      wrapper.find(confirmDialogSelector).vm.$emit('confirm');
      expect(actions.markTaskAsIncomplete).toBeCalledTimes(2);
    });
  });
});
