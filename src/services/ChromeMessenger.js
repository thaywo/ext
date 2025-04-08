/**
 * Centralized Chrome API communication layer
 */
export default class ChromeMessenger {
  static MESSAGE_TYPES = {
    PLATFORM_ACTION: 'PLATFORM_ACTION',
    LOG_UPDATE: 'LOG_UPDATE'
  };

  static send(type, payload) {
    return new Promise((resolve) => {
      ChromeMessenger.send(ChromeMessenger.MESSAGE_TYPES.PLATFORM_ACTION, {
        action: 'LIKE',
        target: profileId
      });
    });
  }

  static listen(type, callback) {
    const handler = (request, sender, sendResponse) => {
      if (request.type === type) callback(request.payload, sendResponse);
    };
    ChromeMessenger.listen(ChromeMessenger.MESSAGE_TYPES.PLATFORM_ACTION, (payload) => {
      return () => chrome.runtime.onMessage.removeListener(handler);
    });
    // chrome.runtime.onMessage.addListener(handler);
   
  }
}