import Vuex from 'vuex';
import {shallowMount, createLocalVue} from '@vue/test-utils';
import GroupShow from '@/pages/GroupShow.vue';
import stubs from '../support/stubs';

const localVue = createLocalVue();
localVue.use(Vuex);

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

  describe('markAllTasksAsIncomplete', () => {
    it('invoke markTaskAsIncomplete for each task', () => {
      wrapper.find('[data-test="mark-all-tasks-as-incomplete"]').vm.$emit('click');

      expect(actions.markTaskAsIncomplete).toBeCalledTimes(2);
    });
  });
});
