import {actions} from '@/services/store/modules/group';
import API from '@/services/api';

describe('actions', () => {
  let injection;

  beforeEach(() => {
    injection = {
      dispatch: jest.fn(),
      commit: jest.fn(),
      getters: {
        task: id => ({id, dueComplete: true})
      },
    };
  });

  describe('updateTask', () => {
    const taskId = 19;
    const responseTask = {
      id: taskId,
      due: '05/04/1950'
    };
    let payload;

    beforeEach(async () => {
      API.tasks.update = jest.fn(() => responseTask);

      payload = {id: taskId, due: '15/09/1911'};
    });

    it('update with early task', async () => {
      await actions.updateTask(injection, payload);

      const expectedPayload = {
        ...injection.getters.task(taskId),
        ...payload
      };

      expect(injection.commit).toHaveBeenNthCalledWith(1, 'updateTask', expectedPayload);
    });

    it('update with definitive task', async () => {
      await actions.updateTask(injection, payload);

      expect(injection.commit).toHaveBeenNthCalledWith(2, 'updateTask', responseTask);
    });

    it('restore initial task if api fail', async () => {
      API.tasks.update = jest.fn(() => { throw Error(); });

      await actions.updateTask(injection, payload);

      expect(injection.commit).toHaveBeenNthCalledWith(
        2, 'updateTask', injection.getters.task(taskId)
      );
    });
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
