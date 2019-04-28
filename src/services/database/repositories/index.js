import repositoryFactory from './repository';

const groupRepository = repositoryFactory('groups');
const taskRepository = repositoryFactory('tasks');

export {
  groupRepository,
  taskRepository,
};
