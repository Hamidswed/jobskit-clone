import http from "./httpService";

export async function getJobsApi() {
  return http.get("/job/all").then(({ data }) => data.data);
}

export async function getDetaildJobsApi() {
  return http.get("/job/all/detailed").then(({ data }) => data.data);
}

