export default {
    name: 'user',
    type: 'document',
    title: 'Users',
    fields: [
      {
        name: 'username',
        type: 'string',
        title: 'Username'
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email'
      },
      {
        name: 'password',
        type: 'string',
        title: 'Password'
      },
      {
        name: 'picture',
        type: 'image',
        title: 'Picture',
      },
      {
        name: 'gender',
        type: 'string',
        title: 'Gender',
        options: {
            list: [
              { title: "Male", value: "male" },
              { title: "Female", value: "female" },
              { title: "Kids", value: "kids" },
            ],
          },
      }
    ]
  }