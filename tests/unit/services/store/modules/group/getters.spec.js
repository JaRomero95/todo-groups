import {getters} from '@/services/store/modules/group';

describe('getters', () => {
  describe('tasks', () => {
    it('returns tasks order by pos', () => {
      const state = {
        group: {
          cards: [
            {pos: 2},
            {pos: 3},
            {pos: 1}
          ]
        }
      };

      const tasks = getters.tasks(state, {group: state.group});
      const taskPositions = tasks.map(g => g.pos);

      expect(taskPositions).toStrictEqual([1, 2, 3]);
    });

    it('returns tasks divided by done', () => {
      const state = {
        group: {
          cards: [
            {pos: 1, dueComplete: true},
            {pos: 2, dueComplete: false},
            {pos: 3, dueComplete: true},
            {pos: 4, dueComplete: false}
          ]
        }
      };

      const tasks = getters.tasks(state, {group: state.group});
      const reducedResult = tasks.map(g => g.dueComplete);

      expect(reducedResult).toStrictEqual([false, false, true, true]);
    });
  });

  describe('task', () => {
    it('returns tasks order by pos', () => {
      const targetTask = {id: 11};

      const state = {
        group: {
          cards: [
            {id: 19},
            targetTask,
          ]
        }
      };

      const task = getters.task(state, {tasks: state.group.cards})(targetTask.id);

      expect(task).toEqual(targetTask);
    });
  });
});
