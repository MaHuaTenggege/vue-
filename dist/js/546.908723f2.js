"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[546],{6546:function(s,t,a){a.r(t),a.d(t,{default:function(){return p}});var e=function(){var s=this,t=s._self._c;return t("div",{staticClass:"pay"},[t("van-nav-bar",{attrs:{fixed:"",title:"订单结算台","left-arrow":""},on:{"click-left":function(t){return s.$router.go(-1)}}}),t("div",{staticClass:"address"},[t("div",{staticClass:"left-icon"},[t("van-icon",{attrs:{name:"logistics"}})],1),s.selectAddress?t("div",{staticClass:"info"},[t("div",{staticClass:"info-content"},[t("span",{staticClass:"name"},[s._v(s._s(s.selectAddress.name))]),t("span",{staticClass:"mobile"},[s._v(s._s(s.selectAddress.phone))])]),t("div",{staticClass:"info-address"},[s._v(s._s(s.longAddress))])]):t("div",{staticClass:"info"},[s._v("请选择配送地址")]),t("div",{staticClass:"right-icon"},[t("van-icon",{attrs:{name:"arrow"}})],1)]),s.order.goodsList?t("div",{staticClass:"pay-list"},[t("div",{staticClass:"list"},s._l(s.order.goodsList,(function(a){return t("div",{key:a.goods_id,staticClass:"goods-item"},[t("div",{staticClass:"left"},[t("img",{attrs:{src:a.goods_image,alt:""}})]),t("div",{staticClass:"right"},[t("p",{staticClass:"tit text-ellipsis-2"},[s._v(s._s(a.goods_name))]),t("p",{staticClass:"info"},[t("span",{staticClass:"count"},[s._v("x"+s._s(a.total_num))]),t("span",{staticClass:"price"},[s._v("¥"+s._s(a.total_pay_price))])])])])})),0),t("div",{staticClass:"flow-num-box"},[t("span",[s._v("共 "+s._s(s.order.orderTotalNum)+" 件商品，合计：")]),t("span",{staticClass:"money"},[s._v("￥"+s._s(s.order.orderTotalPrice))])]),t("div",{staticClass:"pay-detail"},[t("div",{staticClass:"pay-cell"},[t("span",[s._v("订单总金额：")]),t("span",{staticClass:"red"},[s._v("￥"+s._s(s.order.orderTotalPrice))])]),s._m(0),t("div",{staticClass:"pay-cell"},[t("span",[s._v("配送费用：")]),s.selectAddress?t("span",{staticClass:"red"},[s._v("+￥0.00")]):t("span",[s._v("请先选择配送地址")])])]),t("div",{staticClass:"pay-way"},[t("span",{staticClass:"tit"},[s._v("支付方式")]),t("div",{staticClass:"pay-cell"},[t("span",[t("van-icon",{attrs:{name:"balance-o"}}),s._v(" 余额支付（可用 ¥ "+s._s(s.personal.balance)+" 元） ")],1),t("span",{staticClass:"red"},[t("van-icon",{attrs:{name:"passed"}})],1)])]),t("div",{staticClass:"buytips"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:s.remark,expression:"remark"}],attrs:{placeholder:"选填：买家留言（50字内）",name:"",id:"",cols:"30",rows:"10"},domProps:{value:s.remark},on:{input:function(t){t.target.composing||(s.remark=t.target.value)}}})])]):s._e(),t("div",{staticClass:"footer-fixed"},[t("div",{staticClass:"left"},[s._v(" 实付款： "),t("span",[s._v("￥"+s._s(s.order.orderTotalPrice))])]),t("div",{staticClass:"tipsbtn",on:{click:s.submitOrder}},[s._v("提交订单")])])],1)},i=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"pay-cell"},[t("span",[s._v("优惠券：")]),t("span",[s._v("无优惠券可用")])])}],r=a(5720);const o=()=>r.A.get("/address/list"),d=()=>{r.A.post("/address/add",{form:{name:"孙祎",phone:"18873902049",region:[{value:782,label:"湖南"},{value:783,label:"邵阳市"},{value:785,label:"大祥区"}],detail:"北京路1号楼8888室"}})},n=(s,t)=>r.A.get("/checkout/order",{params:{mode:s,delivery:0,couponId:0,isUsePoints:0,...t}}),l=(s,t)=>r.A.post("/checkout/submit",{mode:s,delivery:10,couponId:0,payType:10,isUsePoints:0,...t});var c={name:"PayIndex",data(){return{addressList:[],order:{},personal:{},remark:""}},methods:{async getAddressList(){const{data:{list:s}}=await o();this.addressList=s,console.log(s)},async getOrderList(){if("cart"===this.mode){const{data:{order:s,personal:t}}=await n(this.mode,{cartIds:this.cartIds});this.order=s,this.personal=t}if("buyNow"===this.mode){const{data:{order:s,personal:t}}=await n(this.mode,{goodsId:this.goodsId,goodsSkuId:this.goodsSkuId,goodsNum:this.goodsNum});this.order=s,this.personal=t}},async submitOrder(){"cart"===this.mode&&await l(this.mode,{remark:this.remark,cartIds:this.cartIds}),"buyNow"===this.mode&&await l(this.mode,{remark:this.remark,goodsId:this.goodsId,goodsSkuId:this.goodsSkuId,goodsNum:this.goodsNum}),this.$toast.success("支付成功"),this.$router.replace("/myorder")}},computed:{selectAddress(){return this.addressList[0]},longAddress(){const s=this.selectAddress.region;return s.province+s.city+s.region+this.selectAddress.detail},mode(){return this.$route.query.mode},cartIds(){return this.$route.query.cartIds},goodsId(){return this.$route.query.goodsId},goodsSkuId(){return this.$route.query.goodsSkuId},goodsNum(){return this.$route.query.goodsNum}},async created(){this.getAddressList(),await d(),this.getOrderList()}},u=c,v=a(1656),m=(0,v.A)(u,e,i,!1,null,"0ec62fa2",null),p=m.exports}}]);
//# sourceMappingURL=546.908723f2.js.map