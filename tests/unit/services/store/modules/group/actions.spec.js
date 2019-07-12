import {actions} from '@/services/store/modules/group';

describe('actions', () => {
  let injection;

  beforeEach(() => {
    injection = {
      dispatch: jest.fn(),
    };
  });

  describe('markTaskAsComplete', () => {
    it('dispatch correct action', () => {
      const taskId = 19;
      const isoStringDateRegex = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/;

      testDispatchAction(
        actions.markTaskAsComplete,
        taskId,
        'updateTask',
        {
          id: taskId,
          due: expect.stringMatching(isoStringDateRegex),
          dueComplete: true
        }
      );
    });
  });

  describe('markTaskAsIncomplete', () => {
    it('dispatch correct action', () => {
      const taskId = 19;

      testDispatchAction(
        actions.markTaskAsIncomplete,
        taskId,
        'updateTask',
        {
          id: taskId,
          due: '',
          dueComplete: false
        }
      );
    });
  });

  function testDispatchAction(action, payload, expectedDispatchedAction, expectedPayload) {
    action(injection, payload);

    expect(injection.dispatch).toBeCalledWith(expectedDispatchedAction, expectedPayload);
  }
});
