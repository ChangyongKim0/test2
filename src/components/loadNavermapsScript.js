import loadjs from "load-js";
import invariant from "invariant";

// const _loadNavermapsScript = ({ clientId, submodules, ncpClientId }) => {
//   invariant(clientId || ncpClientId, "clientId or ncpClientId is required");

//   // build naver maps v3 api url
//   let requestUrl = `https://openapi.map.naver.com/openapi/v3/maps.js`;
//   requestUrl += `?ncpClientId=${clientId || ncpClientId}`;

//   if (submodules) {
//     requestUrl += `&submodules=${submodules.join(",")}`;
//   }

//   return loadJs(requestUrl).then(() => {
//     const navermaps = window.naver.maps;

//     if (navermaps.jsContentLoaded) {
//       return navermaps;
//     }

//     const loadingJsContent = new Promise((resolve) => {
//       navermaps.onJSContentLoaded = () => {
//         resolve(navermaps);
//       };
//     });

//     return loadingJsContent;
//   });
// };

// let loadScriptPromise = null;

// const loadNavermapsScriptOld = ({ clientId, submodules, ncpClientId }) => {
//   invariant(
//     clientId || ncpClientId,
//     "loadNavermapsScript: clientId or ncpClientId is required"
//   );

//   if (loadScriptPromise) {
//     return loadScriptPromise;
//   }

//   loadScriptPromise = _loadNavermapsScript({
//     clientId,
//     ncpClientId,
//     submodules,
//   });

//   return loadScriptPromise;
// };

let data = null;

const loadNavermapsScript = ({ clientId, submodules, ncpClientId }) => {
  invariant(
    clientId || ncpClientId,
    "loadNavermapsScript: clientId or ncpClientId is required"
  );

  // build naver maps v3 api url
  let requestUrl = "https://openapi.map.naver.com/openapi/v3/maps.js";
  requestUrl += `?ncpClientId=${clientId || ncpClientId}`;

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
