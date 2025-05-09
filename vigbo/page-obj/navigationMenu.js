const Base = require('./base');

class NavigationMenu extends Base {
  constructor(page) {
    super(page);
  }

  get websitesButton() {
    return this.page.locator('.navigation_href.navigation_sites');
  }

  get gelleriesButton() {
    return this.page.locator('.navigation_href.gallery').first();
  }

  get supportButton() {
    return this.page.locator('.navigation_href.navigation_support');
  }

  get ideasButton() {
    return this.page.locator('.navigation_href.js-open-idea');
  }

  get openMenuButton() {
    return this.page.locator('.user_menu-btn-open');
  }

  get profileSettingsButton() {
    return this.page.locator('.user_menu-options a.user_menu-el');
  }

  get logoutButton() {
    return this.page.locator('.user_menu-logout .user_menu-el');
  }

  async openGelleries() {
    await this.gelleriesButton.click();
  }

  async openPersonalSettings() {
    await this.openMenuButton.click();
    await this.profileSettingsButton.click();
  }
}

module.exports = NavigationMenu;
