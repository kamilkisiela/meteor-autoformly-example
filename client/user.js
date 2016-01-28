User = new SimpleSchema({
  firstname: {
    type: String,
    label: 'Firstname',
    min: 3,
    max: 20
  },
  lastname: {
    type: String,
    label: 'Lastname',
    min: 3,
    max: 25
  },
  gender: {
    type: String,
    label: 'Gender',
    allowedValues: ['male', 'female']
  },
  email: {
    type: String,
    label: 'Email address',
    regEx: SimpleSchema.RegEx.Email,
    autoformly: {
      templateOptions: {
        type: 'email'
      }
    }
  },
  year: {
    type: Number,
    label: 'Year you were born',
    min: 1970,
    max: 2015
  }
});
