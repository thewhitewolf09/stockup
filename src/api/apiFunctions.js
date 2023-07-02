import axiosWithApi from "../hooks/axiosWithApi";

//---------------------------------------------------
//------------------User API-------------------------
//---------------------------------------------------

export const getAllUser = (data) => {
  const options = {
    url: "api/v1/allusers",
    reqType: "get",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
  });
};

export const getUserById = (data) => {
  const options = {
    url: "api/v1/user/id=",
    reqType: "get",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
  });
};

export const createUser = (data) => {
  const options = {
    url: "api/v1/createuser",
    reqType: "post",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
    body: data,
  });
};

export const loginUser = (data) => {
  const options = {
    url: "api/v1/user",
    reqType: "post",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
    body: data,
    headers: JSON.stringify({
      credentials: "include",
    }),
  });
};

export const updateUser = (data) => {
  const options = {
    url: "api/v1/user/" + data.userId,
    reqType: "put",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
    body: JSON.stringify(data.updatedUser),
  });
};

export const updateUserPassword = (data) => {
  const options = {
    url: "api/v1/user/" + data.userId + "/password",
    reqType: "put",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
    body: JSON.stringify(data.password),
  });
};

export const deleteUser = (data) => {
  const options = {
    url: "api/v1/user/id=",
    reqType: "delete",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
  });
};

export const logoutUser = (data) => {
  const options = {
    url: "api/v1/logout",
    reqType: "get",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
  });
};
//---------------------------------------------------
//------------------Task API-------------------------
//---------------------------------------------------

export const createTask = (data) => {
  const options = {
    url: "api/v1/tasks",
    reqType: "post",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
  });
};

export const getAllTasks = (data) => {
  const options = {
    url: "api/v1/tasks",
    reqType: "get",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
  });
};

export const getTaskById = (taskId) => {
  const options = {
    url: "api/v1/tasks/" + taskId,
    reqType: "get",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
  });
};

export const updateTaskById = (data) => {
  const options = {
    url: "api/v1/tasks/" + data.taskId,
    reqType: "put",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
    body: JSON.stringify(data.data),
  });
};

export const deleteTaskById = (data) => {
  const options = {
    url: "api/v1/tasks/id=",
    reqType: "delete",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
  });
};

export const addAttachments = (data) => {
  const options = {
    url: "api/v1/tasks/id=" + "/attachments",
    reqType: "post",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
  });
};

export const addComments = (data) => {
  const options = {
    url: "api/v1/tasks/" + data.taskId + "/comments",
    reqType: "post",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
    body: data.newComment,
  });
};

export const addCommentsReplies = (data) => {
  const options = {
    url:
      "api/v1/tasks/" +
      data.taskId +
      "/comments/" +
      data.commentId +
      "/replies",
    reqType: "post",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
    body: data.newReply
  });
};

export const deleteCommentsById = (data) => {
  const options = {
    url: "api/v1/tasks/" + data.taskId + "/comments/" + data.commentId,
    reqType: "delete",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
  });
};

export const deleteCommentsRepliesById = (data) => {
  const options = {
    url: "api/v1/tasks/" +data.taskId+ "/comments/" +data.commentId+ "/replies/" + data.replyId,
    reqType: "delete",
  };

  return axiosWithApi({
    url: options.url,
    method: options.reqType,
  });
};
