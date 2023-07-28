import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard] // Check if we should show the introduction or forward to inside
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [AuthGuard] // Secure all child pages
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
    // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login-modal',
    loadChildren: () => import('./modals/login-modal/login-modal.module').then( m => m.LoginModalPageModule)
  },
  {
    path: 'register-modal',
    loadChildren: () => import('./modals/register-modal/register-modal.module').then( m => m.RegisterModalPageModule)
  },
  {
    path: 'banner-modal',
    loadChildren: () => import('./modals/banner-modal/banner-modal.module').then( m => m.BannerModalPageModule)
  },
  {
    path: 'terms-modal',
    loadChildren: () => import('./modals/terms-modal/terms-modal.module').then( m => m.TermsModalPageModule)
  },
  {
    path: 'faq-modal',
    loadChildren: () => import('./modals/faq-modal/faq-modal.module').then( m => m.FaqModalPageModule)
  },
  {
    path: 'redeem-detail',
    loadChildren: () => import('./redeem-detail/redeem-detail.module').then( m => m.RedeemDetailPageModule)
  },
  {
    path: 'promo',
    loadChildren: () => import('./promo/promo.module').then( m => m.PromoPageModule)
  },
  {
    path: 'redeem-modal',
    loadChildren: () => import('./modals/redeem-modal/redeem-modal.module').then( m => m.RedeemModalPageModule)
  },
  {
    path: 'redeem-list',
    loadChildren: () => import('./redeem-list/redeem-list.module').then( m => m.RedeemListPageModule)
  },
  {
    path: 'promo-modal',
    loadChildren: () => import('./modals/promo-modal/promo-modal.module').then( m => m.PromoModalPageModule)
  },
  {
    path: 'redeem-tagihan',
    loadChildren: () => import('./redeem-tagihan/redeem-tagihan.module').then( m => m.RedeemTagihanPageModule)
  },
  {
    path: 'redeem-ewallet',
    loadChildren: () => import('./redeem-ewallet/redeem-ewallet.module').then( m => m.RedeemEwalletPageModule)
  },
  {
    path: 'redeem-now',
    loadChildren: () => import('./redeem-now/redeem-now.module').then( m => m.RedeemNowPageModule)
  },
  {
    path: 'redeem-ewallet-list',
    loadChildren: () => import('./redeem-ewallet-list/redeem-ewallet-list.module').then( m => m.RedeemEwalletListPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'redeem-confirm',
    loadChildren: () => import('./redeem-confirm/redeem-confirm.module').then( m => m.RedeemConfirmPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'notif-list',
    loadChildren: () => import('./notif-list/notif-list.module').then( m => m.NotifListPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'ganti-no',
    loadChildren: () => import('./ganti-no/ganti-no.module').then( m => m.GantiNoPageModule)
  },
  {
    path: 'reset-imei',
    loadChildren: () => import('./reset-imei/reset-imei.module').then( m => m.ResetImeiPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./modals/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'reset-pass',
    loadChildren: () => import('./reset-pass/reset-pass.module').then( m => m.ResetPassPageModule)
  },
  {
    path: 'ppob-pln-token',
    loadChildren: () => import('./ppob-pln-token/ppob-pln-token.module').then( m => m.PpobPlnTokenPageModule)
  },
  {
    path: 'ppob-pln-tagihan',
    loadChildren: () => import('./ppob-pln-tagihan/ppob-pln-tagihan.module').then( m => m.PpobPlnTagihanPageModule)
  },
  {
    path: 'ppob-pln-token-history',
    loadChildren: () => import('./ppob-pln-token-history/ppob-pln-token-history.module').then( m => m.PpobPlnTokenHistoryPageModule)
  },
  {
    path: 'ppob-pln-token-history-details',
    loadChildren: () => import('./ppob-pln-token-history-details/ppob-pln-token-history-details.module').then( m => m.PpobPlnTokenHistoryDetailsPageModule)
  },
  {
    path: 'top-detail',
    loadChildren: () => import('./top-detail/top-detail.module').then( m => m.TopDetailPageModule)
  },
  {
    path: 'modal-notif',
    loadChildren: () => import('./modals/modal-notif/modal-notif.module').then( m => m.ModalNotifPageModule)
  },
  {
    path: 'status-hadiah',
    loadChildren: () => import('./status-hadiah/status-hadiah.module').then( m => m.StatusHadiahPageModule)
  },
  {
    path: 'ewallet-details',
    loadChildren: () => import('./modals/ewallet-details/ewallet-details.module').then( m => m.EwalletDetailsPageModule)
  },
  {
    path: 'redeem-status',
    loadChildren: () => import('./redeem-status/redeem-status.module').then( m => m.RedeemStatusPageModule)
  },
  {
    path: 'resi-modal',
    loadChildren: () => import('./modals/resi-modal/resi-modal.module').then( m => m.ResiModalPageModule)
  },
  {
    path: 'redeem-ovo-point',
    loadChildren: () => import('./redeem-ovo-point/redeem-ovo-point.module').then( m => m.RedeemOvoPointPageModule)
  },
  {
    path: 'modal-splash',
    loadChildren: () => import('./modals/modal-splash/modal-splash.module').then( m => m.ModalSplashPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'map-pengiriman',
    loadChildren: () => import('./modals/map-pengiriman/map-pengiriman.module').then( m => m.MapPengirimanPageModule)
  },
  {
    path: 'promo2',
    loadChildren: () => import('./promo2/promo2.module').then( m => m.Promo2PageModule)
  },
  {
    path: 'top',
    loadChildren: () => import('./top/top.module').then( m => m.TopPageModule)
  },
  {
    path: 'riwayat-transaksi',
    loadChildren: () => import('./riwayat-transaksi/riwayat-transaksi.module').then( m => m.RiwayatTransaksiPageModule)
  },
  {
    path: 'belanja-modal',
    loadChildren: () => import('./modals/belanja-modal/belanja-modal.module').then( m => m.BelanjaModalPageModule)
  },
  {
    path: 'detail-belanja',
    loadChildren: () => import('./detail-belanja/detail-belanja.module').then( m => m.DetailBelanjaPageModule)
  },
  {
    path: 'list-produk',
    loadChildren: () => import('./list-produk/list-produk.module').then( m => m.ListProdukPageModule)
  },
  {
    path: 'detail-corporate-distribution',
    loadChildren: () => import('./modals/detail-corporate-distribution/detail-corporate-distribution.module').then( m => m.DetailCorporateDistributionPageModule)
  },
  {
    path: 'redeem-list-travel',
    loadChildren: () => import('./redeem-list-travel/redeem-list-travel.module').then( m => m.RedeemListTravelPageModule)
  },
  {
    path: 'redeem-detail-travel',
    loadChildren: () => import('./redeem-detail-travel/redeem-detail-travel.module').then( m => m.RedeemDetailTravelPageModule)
  },
  {
    path: 'redeem-detail-electronic',
    loadChildren: () => import('./redeem-detail-electronic/redeem-detail-electronic.module').then( m => m.RedeemDetailElectronicPageModule)
  },
  {
    path: 'redeem-list-electronic',
    loadChildren: () => import('./redeem-list-electronic/redeem-list-electronic.module').then( m => m.RedeemListElectronicPageModule)
  },
  {
    path: 'redeem-list-evoucher',
    loadChildren: () => import('./redeem-list-evoucher/redeem-list-evoucher.module').then( m => m.RedeemListEvoucherPageModule)
  },
  {
    path: 'redeem-detail-evoucher',
    loadChildren: () => import('./redeem-detail-evoucher/redeem-detail-evoucher.module').then( m => m.RedeemDetailEvoucherPageModule)
  },
  {
    path: 'product-blibli',
    loadChildren: () => import('./product-blibli/product-blibli.module').then( m => m.ProductBlibliPageModule)
  },
  {
    path: 'detail-product-blibli',
    loadChildren: () => import('./detail-product-blibli/detail-product-blibli.module').then( m => m.DetailProductBlibliPageModule)
  },
  {
    path: 'redeem-blibli',
    loadChildren: () => import('./redeem-blibli/redeem-blibli.module').then( m => m.RedeemBlibliPageModule)
  },
  {
    path: 'redeem-confirm-blibli',
    loadChildren: () => import('./redeem-confirm-blibli/redeem-confirm-blibli.module').then( m => m.RedeemConfirmBlibliPageModule)
  },

  // {
  //   path: 'tab4',
  //   loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  // },
  // {
  //   path: 'tab5',
  //   loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
