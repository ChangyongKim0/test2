import loadjs from "load-js";
import invariant from "invariant";

let data = null;

const loadNavermapsScript = ({ clientId, submodules, ncpClientId }) => {
  invariant(
    clientId || ncpClientId,
    "loadNavermapsScript: clientId or ncpClientId is required"
  );

  // build naver maps v3 api url
  let requestUrl = "//dapi.kakao.com/v2/maps/sdk.js";
  requestUrl += `?appkey=${clientId || ncpClientId}`;

  if (submodules) {
    requestUrl += `&submodules=${submodules.join(", ")}`;
  }

  if (data) {
    return data;
  }

  data = loadjs(requestUrl).then(() => {
    let naverMaps = window.naver.maps;
    const loadingJsContent = new Promise((resolve) => {
      naverMaps.onJSContentLoaded = () => {
        resolve(naverMaps);
      };
    });
    return loadingJsContent;
  });

  return data;
};
export default loadNavermapsScript;
