module.exports = {

  name: "local_act_1",

  title: "Local Act 1",

  description: "",
  version: "v1",

  input: {
    title: "Local Act 1",
    type: "object",
    properties: {

    }
  },

  output: {
    title: "output",
    type: "object",
    properties: {

    }
  },

  mock_input: {},

  execute: function (input, output) {
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    // your code here

    return output(null, { data: "Vinayak" });
  }

}
