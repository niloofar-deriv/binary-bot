import { translate } from '../../../common/i18n';
import { isLoggedInDeriv } from '../../../common/utils/storageManager';
import { isMobile } from '../../../common/utils/tools';

const steps = [
    {
        title: translate('Take a quick tour'),
        text: `
          <p>
            ${translate('Ready to learn how to use Binary Bot?')}
          </p>
          <div class="tour-custom-buttons">
            <a class="button-secondary" onclick="tour.stop()"><span>${translate('No Thanks')}</span></a>
            <a class="button" onclick="tour.next()"><span>${translate('Yes')}</span></a>
          </div>
          <div class="tour-custom-buttons">
            <input type="checkbox" id="do-not-ask-me-again"></input>
            <label for="do-not-ask-me-again">
                ${translate('Do not ask me again.')}
            </label>
          </div>
          `,
        selector: '#center',
        position: 'center',
        isFixed: true,
        offset: 0,
        style: {
            textAlign: 'center',
            arrow: {
                display: 'none',
            },
            button: {
                display: 'none',
            },
            close: {
                display: 'none',
            },
        },
    },
    {
        title: translate('Workspace'),
        text: `<p>${translate('Drag and drop block files or make your own strategies.')}</p>`,
        selector: isMobile() ? '.injectionDiv' : '#workspace_center',
        position: isMobile() ? 'center' : 'top',
        offset: 200,
    },
    {
        title: translate('Blocks toolbox'),
        text: `<p>${translate('Add more blocks from here to your bot.')}</p>`,
        selector: '.blocklyTreeRoot',
        position: 'right',
    },
    {
        title: translate('Accounts'),
        text: `<p>
      ${translate('Login before starting your bot. Always test your strategies with the virtual account.')}
    </p>`,
        selector: isLoggedInDeriv() ? '#acc_switcher' : '.header__btn',
        position: 'left',
    },
    {
        title: translate('Bot controls'),
        text: `<p>
      ${translate('Control your blocks. Hold the cursor on each button for more info.')}
    </p>`,
        selector: isMobile() ? '#toolbox' : '#zoomIn',
        position: 'left',
    },
    {
        title: translate('Enjoy!'),
        text: `<p>
      ${translate('Want to report an issue or ask for help?')}
      <a target="blank" href="https://github.com/binary-com/binary-bot/issues/new">
        ${translate('Click here')}
      </a>
    </p>`,
        selector: '#center',
        position: 'center',
        style: {
            arrow: {
                display: 'none',
            },
        },
        isFixed: true,
        offset: 0,
    },
];

export default steps;
