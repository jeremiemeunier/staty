const commands = {
  name: "api",
  description: "Gestion of api bind",
  default_member_permissions: 0,
  database: false,
  options: [
    {
      name: "add",
      description: "Configure a role for notifications",
      type: 1,
      options: [
        {
          name: "apiname",
          description: "An api name",
          type: 3,
          required: true
        },
        {
          name: "apiadresse",
          description: "An api adress",
          type: 3,
          required: true
        },
        {
          name: "apirole",
          description: "A role",
          type: 8,
          required: false
        }
      ]
    },
    {
      name: "remove",
      description: "Remove an api of the bind",
      type: 1
    }
  ]
};

module.exports = {
  data: commands
}