import lang from 'i18n-js';
import { WrappedAlert as Alert } from '@/helpers/alert';
import { Navigation } from '@/navigation';
import Routes from '@/navigation/routesNames';

export default function watchingAlert() {
  Alert.alert(
    lang.t('wallet.alert.this_wallet_in_watching_mode'),
    lang.t('wallet.alert.looks_like_imported_public_address'),
    [
      {
        onPress: () => {
          Navigation.handleAction(Routes.ADD_WALLET_NAVIGATOR, {
            screen: Routes.IMPORT_SEED_PHRASE_FLOW,
            params: { type: 'import' },
          });
        },
        text: lang.t('wallet.alert.finish_importing'),
      },
      {
        text: lang.t('wallet.alert.nevermind'),
      },
    ]
  );
}
