export default function loadBalancer(chinaDownload, USDownload) {
  // Return a Promise that resolves with the value of the first resolved Promise
  return Promise.race([chinaDownload, USDownload]);
}
