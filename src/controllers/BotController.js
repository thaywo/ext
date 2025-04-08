export default class BotController {
  constructor(platform) {
    if (new.target === BotController) {
      throw new Error("Abstract class - implement child class");
    }
    this.platform = platform;
  }

  async execute() {
    await this._validate();
    await this._executePlatformAction(); // REQUIRED in child
    await this._logResult();
  }
}