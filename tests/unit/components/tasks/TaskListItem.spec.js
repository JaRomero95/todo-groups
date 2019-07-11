import {shallowMount} from '@vue/test-utils';
import TaskListItem from '@/components/tasks/TaskListItem.vue';

const taskId = 19;

const options = {
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

  it('updateComplete', () => {
    wrapper.vm.updateComplete(true);
    expect(wrapper.vm.markTaskAsComplete).toBeCalledWith(taskId);
  });
});
