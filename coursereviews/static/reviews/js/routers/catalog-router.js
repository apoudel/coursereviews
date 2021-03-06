var middcourses = middcourses || {};

(function () {
  'use strict';

  middcourses.CatalogRouter = Backbone.Router.extend({
    routes: {
      'departments/:id(/:departmentName)': 'routeDepartment',
      '': 'routeDepartment'
    },

    routeDepartment: function (id, departmentName) {
      middcourses.department = id || '6'; // American Studies

      if (!middcourses.view) {
        middcourses.view = new middcourses.CatalogView({

          // if we requested with an id, go to the courses-professors panel
          // for that id
          activePanel: id ? 'courses-professors' : 'departments'
        });
      } else {
        middcourses.departments.each(function (department) {
          department.set('active', department.get('id') === +middcourses.department);
        });
      }

      middcourses.courses.fetch({reset: true});
      middcourses.professors.fetch({reset: true});
    }
  });
})();
