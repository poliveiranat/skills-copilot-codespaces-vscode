function skillMembers() {
  return {
    restrict: 'E',
    templateUrl: 'modules/member/skill-members.html',
    controller: 'SkillMembersController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      skill: '='
    }
  };
}