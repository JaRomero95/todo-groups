import {shallowMount, createLocalVue} from '@vue/test-utils';
import TaskListItem from '@/components/tasks/TaskListItem.vue';

const localVue = createLocalVue();

const taskId = 19;

const options = {
  localVue,
  propsData: {
    initialValue: {
      id: taskId,
    }
  }
};

describe('TaskListItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TaskListItem, options);
    wrapper.vm.markTaskAsComplete = jest.fn();
    wrapper.vm.markTaskAsIncomplete = jest.fn();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('updateComplete', () => {
    it('mark task as complete', () => {
      wrapper.vm.updateComplete(true);
      expect(wrapper.vm.markTaskAsComplete).toBeCalledWith(taskId);
    });

    it('mark task as incomplete', () => {
      wrapper.vm.updateComplete(false);
      expect(wrapper.vm.markTaskAsIncomplete).toBeCalledWith(taskId);
    });
  });
});
