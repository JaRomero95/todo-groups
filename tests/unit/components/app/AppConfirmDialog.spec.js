import {shallowMount} from '@vue/test-utils';
import AppConfirmDialog from '@/components/app/AppConfirmDialog.vue';

const title = 'Hello world';
const message = 'Lorem ipsum dolor';

const options = {
  propsData: {
    title,
    message,
  }
};

describe('AppConfirmDialog', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AppConfirmDialog, options);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('show title prop', () => {
    const text = wrapper.find('v-card-title-stub').text();
    expect(text).toEqual(title);
  });

  it('show message prop', () => {
    const text = wrapper.find('v-card-text-stub').text();
    expect(text).toEqual(message);
  });

  it('cancel button emit cancel event', () => {
    wrapper.find('[data-test="dialog-cancel-btn"]').vm.$emit('click');
    expect(wrapper.emitted().cancel).toBeTruthy();
  });

  it('confirm button emit confirm event', () => {
    wrapper.find('[data-test="dialog-confirm-btn"]').vm.$emit('click');
    expect(wrapper.emitted().confirm).toBeTruthy();
  });
});
