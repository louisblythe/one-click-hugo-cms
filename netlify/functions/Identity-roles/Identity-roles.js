exports.handler = async function(event, context, callback, async) {
  const data = JSON.parse(event.body);
  const { user } = data;
    
  const responseBody = {
    app_metadata: {
      roles: ["visitor"],
      my_user_info: "this is some user info"
    },
    user_metadata: {
      ...user.user_metadata, // append current user metadata
      custom_data_from_function: "hurray this is some extra metadata"
    }
  };
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  });
};

module.exports = { handler }
