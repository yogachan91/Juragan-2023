import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap, take } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { Storage } from '@capacitor/storage';
import { AuthenticationService } from '../services/authentication.service';

//
//const api_url: string = 'https://admin.ulidolphin.com/api/Dolphin5_2023/';
const api_url: string = 'https://admin.ulidolphin.com/api/Dolphin5MirrorAl/'; 
const api_sodexo: string = 'https://admin.ulidolphin.com/api/Api_Sodexo/';
const api_blibli: string = 'https://admin.ulidolphin.com/api/Api_Blibli/'
@Injectable({
  providedIn: 'root'
})
export class DolphinService {
  token = '';
  outlet_id = '';
  appVersion: string = '506';
  appVersionnew: string = '612';
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    this.appVersion = this.authService.getAppVersion();
  }

  getpoint() {
    return this.http.get(api_url + 'getpointuliv4/'+this.authService.getToken()).pipe(map((res: any) => (res.retdata)));
  }

  gettop5() {
    return this.http.get(api_url + 'gettop5/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }

  setredeemselesai(redeem_no) {
    return this.http.get(api_url + 'setredeemselesai/'+redeem_no.trim()).pipe(map((res: any) => (res)));
  }

  gettop5brand() {
    return this.http.get(api_url + 'gettop5brand/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }

  gettotalbelanja() {
    return this.http.get(api_url + 'gettotalbelanja/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }

  getfop() {
    return this.http.get(api_url + 'getfop/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }

  getstatushadiahlist(stat) {
    return this.http.get(api_url + 'getstatushadiahlist/'+this.authService.getID()+'/'+stat).pipe(map((res: any) => (res)));
  }

  getslides(){
    return this.http.get(api_url + 'getslides/'+this.authService.getToken()+'/'+this.appVersion).pipe(map((res: any) => (res.retdata)));
  }

  getversion(){
    return this.http.get(api_url + 'getversion/'+this.authService.getToken()+'/'+this.appVersion).pipe(map((res: any) => (res)));
  }

  // getversionapps(){
  //   return this.http.get(api_url + 'appVersionnew/'+this.appVersion).pipe(map((res: any) => (res)));
  // }
  getversionapps(){
    return this.http.get(api_url + 'versionapps/'+this.appVersionnew).pipe(map((res: any) => (res)));
  }

  gettransaksi(type){
    return this.http.get(api_url + 'gettransaksi/'+this.authService.getID()+'/'+type).pipe(map((res: any) => (res.retdata)));
  }

  gettransaksidetail(type){
    return this.http.get(api_url + 'gettransaksidetail/'+this.authService.getID()+'/'+type).pipe(map((res: any) => (res.retdata)));
  }

  gettarget(type){
    return this.http.get(api_url + 'gettarget/'+this.authService.getID()+'/'+type).pipe(map((res: any) => (res)));
  }

  getfaq(){
    return this.http.get(api_url + 'getfaq').pipe(map((res: any) => (res.retdata)));
  }

  getreward(code){
    return this.http.get(api_url + 'getreward2/'+this.authService.getToken()+'/'+this.appVersion+'/'+code).pipe(map((res: any) => (res)));
  }

  getbalanceuli(){
    return this.http.get(api_url + 'getbalanceuli2/'+this.authService.getToken()+'/new').pipe(map((res: any) => (res.retdata)));
  }

  ewalletdenom(code){
    return this.http.get(api_url + 'ewalletdenom/'+code).pipe(map((res: any) => (res.retdata)));
  }

  getdetailprofile(){
    return this.http.get(api_url + 'getdetailprofile/'+this.authService.getID()).pipe(map(
      (res: any) => (res.retdata)
    ));
  }

  getdetailprofilesodexo(){
    return this.http.get(api_url + 'getdetailprofilesodexo/'+this.authService.getID()).pipe(map(
      (res: any) => (res)
    ));
  }

  getpengirimanbytoken(){
    return this.http.get(api_url + 'getpengirimanbytoken/'+this.authService.getToken()).pipe(map((res: any) => (res)));
  }

  sendotp(phoneNum, typ){
    return this.http.get(api_url + 'sendotpovo/'+phoneNum+'/'+typ).pipe(map((res: any) => (res)));
  }

  //ovo
  checkovo(phoneNum, amount){
    return this.http.get(api_url + 'checkovo/'+phoneNum.trim()+'/'+amount.trim()).pipe(map((res: any) => (res)));
  }

  redeemovo(phoneNum, amount) {
    return this.http.get(api_url + 'redeemovo/'+phoneNum.trim()+'/'+amount.trim()).pipe(map((res: any) => (res)));
  }

  redeemovopost(sendData, phoneNum, amount){
    return this.http.post(api_url+'redeemovopost/'+this.authService.getID()+ '/'+phoneNum.trim()+'/'+amount.trim(), sendData).pipe(
      map((res: any) => (res))
    )
  }

  checkovostatus(rno) {
    return this.http.get(api_url + 'checkovostatus/'+rno).pipe(map((res: any) => (res)));
  }

  getlistredeemovo() {
    return this.http.get(api_url + 'getlistredeemovo/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }
  
  //.ovo

  //ovo-point
  getstatusredeem() {
    return this.http.get(api_url + 'getstatusredeem/'+this.appVersion+'/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }

  getovolist() {
    return this.http.get(api_url + 'getovolist/'+this.authService.getToken()+'/'+this.appVersion).pipe(map((res: any) => (res)));
  }

  ovopointredeem(redeem_code, points, phoneNum) {
    return this.http.get(api_url + 'ovoredeem/' + redeem_code.trim() + '/' +points+ '/new/' +this.authService.getToken() + '/' +phoneNum).pipe(map((res: any) => (res)));
  }

  //.ovo-point

  ewalletredeem(ewallettype, redeem_code, phoneNum){
    return this.http.get(api_url+'ewalletredeem/' + ewallettype.trim() + '/' + redeem_code.trim() + '/' +this.authService.getID()+ '/' +phoneNum).pipe(map((res: any) => (res)));
  }

  exchangerewardGiftUli(sendData, redeem_code, points, type, type_r,gift_name){
    return this.http.post(api_url+'exchangerewardgiftuli2/'+redeem_code.trim()+'/'+points+'/'+type+'/'+this.authService.getToken()+'/'+type_r+'/'+gift_name, sendData).pipe(
      map((res: any) => (res))
    )
  }

  changePengiriman(sendData){
    return this.http.post(api_url+'changepengiriman/'+this.authService.getID(), sendData).pipe(
      map((res: any) => (res))
    )
  }

  getGantiNoHape(){
    return this.http.get(api_url + 'getGantiNoHape/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }

  getResetIMEI(){
    return this.http.get(api_url + 'getResetIMEI/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }

  getResetPass(){
    return this.http.get(api_url + 'getResetPass/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }

  getforgotpass(_id){
    return this.http.get(api_url + 'getforgotpass/'+_id).pipe(map((res: any) => (res)));
  }

  getregister(_id){
    return this.http.get(api_url + 'getregisterd5/'+_id).pipe(map((res: any) => (res)));
  }

  getOTPEmail(sendData){
    return this.http.post(api_url+'getOTPEmail/', sendData).pipe(
      map((res: any) => (res))
    )
  }

  getOTPChangeEmail(sendData,typeotp){
    return this.http.post(api_url+'getOTPChangeEmail/'+typeotp, sendData).pipe(
      map((res: any) => (res))
    )
  }

  
  getChangeEmail(sendData){
    return this.http.post(api_url+'getChangeEmail/', sendData).pipe(
      map((res: any) => (res))
    )
  }

  checkimeiget(imei){
    return this.http.get(api_url + 'checkimei/'+this.authService.getID()+'/'+imei).pipe(map((res: any) => (res)));
  }

  getsplashscreen(){
    return this.http.get(api_url + 'getsplashscreen').pipe(map((res: any) => (res)));
  }

  checkimei(imei, email_address) {    
    let sendData = {
      outlet_id: this.authService.getID(),
      email: email_address,
      imei: imei
    }
    console.log('cekdatasend',sendData)
    return this.http.post(api_url+'checkimei', sendData).pipe(
      map((res: any) => (res))
    )
  }

  setimei(imei, email_address) {    
    let sendData = {
      outlet_id: this.authService.getID(),
      email: email_address,
      imei: imei
    }
    return this.http.post(api_url+'setimei', sendData).pipe(
      map((res: any) => (res))
    )
  }

  ppobdenom(){
    return this.http.get(api_url + 'ppobdenom').pipe(map((res: any) => (res.retdata)));
  }

  ppob_pln_prepaid_inquiry(no, amount) {
    return this.http.get(api_url + 'ppobplnprepaidinquiry/'+no+'/'+amount).pipe(map((res: any) => (res)));
  }

  ppobplnpayment(no, item) {
    return this.http.get(api_url + 'ppobplnpayment/'+no+'/'+item+'/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }

  ppobcheck(no) {
    return this.http.get(api_url + 'ppobcheck/'+no+'/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }

  ppoblist() {
    return this.http.get(api_url + 'ppoblist/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }

  gettop5detail(sendData, type){
    return this.http.post(api_url+'gettop5detail/'+this.authService.getID()+'/'+type, sendData).pipe(
      map((res: any) => (res))
    )
  }

  getnotif() {
    return this.http.get(api_url + 'getnotif/'+this.authService.getToken()).pipe(map((res: any) => (res)));
  }

  getredeemtype(parent) {
    return this.http.get(api_url + 'getredeemtype/'+parent+'/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }

  getpengiriman() {
    return this.http.get(api_url + 'getpengiriman/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }

  getewalletlist() {
    console.log('getewalletlist', api_url + 'getewalletlist/'+this.authService.getID());
    return this.http.get(api_url + 'getewalletlist/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }
  
  getarea(areatype, prov, city, subdistrict, village) {
    let params = areatype;
      if (areatype == 'city') {
        params = params+'/'+prov;
      } else if (areatype == 'subdistrict') {
        params = params+'/'+prov+'/'+city;
      } else if (areatype == 'village') {
        params = params+'/'+prov+'/'+city+'/'+subdistrict;
      } else if (areatype == 'postalcode') {
        params = params+'/'+prov+'/'+city+'/'+subdistrict+'/'+village;
      } else {
        params = areatype;
      }
    return this.http.get(api_url + 'getareanew/'+params).pipe(map((res: any) => (res)));
  }

// developer ali
  gettransaksidetailpoint(type){
    return this.http.get(api_url + 'gettransaksidetailpoint/'+this.authService.getID()+'/'+type).pipe(map((res: any) => (res.retdata)));
  }

  readnotif(id){
    return this.http.get(api_url + 'readnotif/'+id).pipe(map((res: any) => (res.retdata)));
  }

  cekdatapengiriman(){
    return this.http.get(api_url + 'cekdatapengiriman/'+this.authService.getID()).pipe(map((res: any) => (res.retdata[0])));
  }

  tahun(){
    return this.http.get(api_url + 'tahun').pipe(map((res: any) => (res)));
  }

  week(){
    return this.http.get(api_url + 'week').pipe(map((res: any) => (res)));
  }

  filterpoint_basic_poin(tahun,week){
    return this.http.get(api_url + 'filterpoint_basic_poin/'+this.authService.getID()+'/'+tahun+'/'+week).pipe(map((res: any) => (res)));
  }

  filterpoint(tahun,bulan,type){
    return this.http.get(api_url + 'filterpoint/'+this.authService.getID()+'/'+tahun+'/'+bulan+'/'+type).pipe(map((res: any) => (res)));
  }

  updatetanggallahir(tanggal){
    return this.http.get(api_url + 'updatetanggallahir/'+this.authService.getID()+'/'+tanggal).pipe(map((res: any) => (res)));
  }

  banner_target_bu(){
    return this.http.get(api_url + 'banner_target_bu/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }

  target_corporate(type){
    return this.http.get(api_url + 'target_corporate/'+this.authService.getID()+'/'+type).pipe(map((res: any) => (res.retdata)));
  }

  target_homecare(type){
    return this.http.get(api_url + 'target_homecare/'+this.authService.getID()+'/'+type).pipe(map((res: any) => (res.retdata)));
  }

  target_personal_care(type){
    return this.http.get(api_url + 'target_personal_care/'+this.authService.getID()+'/'+type).pipe(map((res: any) => (res.retdata)));
  }

  target_nutrition(type){
    return this.http.get(api_url + 'target_nutrition/'+this.authService.getID()+'/'+type).pipe(map((res: any) => (res.retdata)));
  }

  target_bw(type){
    return this.http.get(api_url + 'target_bw/'+this.authService.getID()+'/'+type).pipe(map((res: any) => (res.retdata)));
  }

  peringkat_belanja(){
    return this.http.get(api_url + 'peringkat_belanja/'+this.authService.getID()).pipe(map((res: any) => (res.retdata)));
  }

  detail_peringkat_belanja(division){
    return this.http.get(api_url + 'detail_peringkat_belanja/'+this.authService.getID()+'/'+division ).pipe(map((res: any) => (res.retdata)));
  }

  riwayat_poin(type){
    return this.http.get(api_url + 'riwayat_poin/'+this.authService.getID()+'/'+type).pipe(map((res: any) => (res)));
  }

  cluster_code(){
    return this.http.get(api_url + 'cluster_code/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }
  poin_aktif(){
    return this.http.get(api_url + 'poin_aktif/'+ this.authService.getID()).pipe(map((res:any)=>(res)));
  }

  statususerriwayat(){
    return this.http.get(api_url + 'statususerriwayat/'+ this.authService.getID()).pipe(map((res:any)=>(res)));
  }

  unilever_produk(){
    return this.http.get(api_url + 'unilever_produk/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }

  header_target_dist(){
    return this.http.get(api_url + 'header_target_dist/'+this.authService.getID()).pipe(map((res: any) => (res.retdata)));
  }

  setupotp(){
    return this.http.get(api_url + 'setupotp').pipe(map((res: any) => (res)));
  }

  whatsappinfo(store_name,outlet_id){
    return this.http.get(api_url + 'whatsappinfo/'+store_name+'/'+outlet_id).pipe(map((res: any) => (res)));
  }

  detail_corporate_distibution(data){
    return this.http.get(api_url + 'detail_corporate_distibution/'+this.authService.getID()+'/'+data).pipe(map((res: any) => (res)));
  }

  updatepos(kodepos) {
    return this.http.get(api_url + 'updatepos/'+kodepos+'/'+this.authService.getID()).pipe(map((res: any) => (res)));
  }

  logs_auth(type,page){
    return this.http.get(api_url + 'logs_auth/'+this.authService.getID()+'/'+type+'/'+page).pipe(map((res: any) => (res))); 
  }
  panduan(){
    return this.http.get(api_url + 'panduan').pipe(map((res: any) => (res))); 
  }

  disclaimer(){
    return this.http.get(api_url + 'disclaimer').pipe(map((res: any) => (res))); 
  }

  text_otp(){
    return this.http.get(api_url + 'text_otp').pipe(map((res: any) => (res)));
  }

  redeem_ewallet_text(){
    return this.http.get(api_url + 'redeem_ewallet_text').pipe(map((res: any) => (res)));
  }
  redeem_all_text(type,nohp){
    return this.http.get(api_url + 'redeem_all_text/'+ type+'/'+nohp).pipe(map((res: any) => (res)));
  }

  redeemsodexo(sendData, redeem_code, point, phoneNum){
    return this.http.post(api_url+'redeemsodexo/' + redeem_code.trim() + '/' + point + '/' +this.authService.getToken()+'/'+phoneNum,sendData).pipe(map((res: any) => (res)));
  }

  cekvocuher(no_redeem){
    return this.http.get(api_url + 'cekvocuher/'+ no_redeem).pipe(map((res: any) => (res)));
  }
  kirimvoucherkeemail(no_redeem){
    return this.http.get(api_url + 'kirimvoucherkeemail/'+ no_redeem).pipe(map((res: any) => (res)));
  }

  product_blibli(){
    return this.http.get(api_blibli + 'product/').pipe(map((res: any) => (res)));
  }
  
  detail_product_blibli(sku){
    return this.http.get(api_blibli + 'detail_product/'+ sku).pipe(map((res: any) => (res)));
  }

  detail_product_blibli_poin(sku){
    return this.http.get(api_blibli + 'detail_blibli_poin/'+ sku).pipe(map((res: any) => (res)));
  }

  checkout_blibli(sendData,bayar){
    return this.http.post(api_blibli+'checkout/'+ this.authService.getToken()+'/'+ bayar,sendData).pipe(
      map((res: any) => (res))
    )
  }

  pay_now(sku){
    return this.http.get(api_blibli + 'pay_now/'+this.authService.getToken()+'/'+sku).pipe(map((res: any) => (res)));
  }


  

  
  

}
