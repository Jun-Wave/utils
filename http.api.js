import http from './http.interceptor.js'


module.exports = {
	http: http,
	/******************************************
	 * 投保人api
	 ******************************************/
	// 删除投保人
	deletePolicyHolder: (id) => http.delete(`/front/policyHolder/${id}`),
	// 添加投保人
	addPolicyHolder: (data) => http.post('/front/policyHolder',data),
	// 编辑投保人信息
	editPolicyHolder: (data) => http.put('/front/policyHolder',data),
	// 获取投保人列表
	getPolicyHolderList: () => http.get('/front/policyHolder/list'),

	/******************************************
	 * 被保人/店铺api
	 ******************************************/
	// 删除被投保人/店铺
	deleteInsured: (id) => http.delete(`/front/insured/${id}`),
	// 添加被投保人
	addInsured: (data) => http.post('/front/insured',data),
	// 编辑被投保人信息
	editInsured: (data) => http.put('/front/insured',data),
	// 获取被投保人/店铺列表
	getInsuredList: () => http.get('/front/insured/list'),

	/******************************************
	 * 登录api
	 ******************************************/
	// 用户最终注册接口
	wxRegister: (data) => http.post('/login/wx/register',data),
	// 获取微信的用户的信息
	wxUserInfo: (data) => http.post('/login/wx/userInfo',data),
	// 获取用户的手机号
	wxPhone: (data) => http.post('/login/wx/phone',data),
	// 验证微信登录
	wxAuth: (code) => http.post(`/login/wx/auth/${code}`),

	/******************************************
	 * 用户相关api
	 ******************************************/
	// 获取浏览用户(粉丝)列表
	getUserFans: () => http.get('/front/user/fans'),
	// 获取直属团队的用户列表
	getUserDirect: () => http.get('/front/user/direct'),
	// 获取自己的用户信息
	getUserInfo: () => http.get('/front/user/info'),
	// 获取间接团队的用户列表
	getUserInDirect: () => http.get('/front/user/inDirect'),
	// 获取余额记录
	getBalanceLogList: (data) => http.get('/front/user/balanceLog/list',data),

	/******************************************
	 * 小程序首页api
	 ******************************************/
	// 获取首页需要显示的商品列表
	getIndexGoods: () => http.get('/index/goods'),

	/******************************************
	 * 邀请码api
	 ******************************************/
	// 代理人获取自己的推荐人(导师)的信息
	getInvitedUser: () => http.get('/front/inviteCode/invitedUser'),
	// 代理商获取自己的邀请码
	getInviteCode: () => http.get('/front/inviteCode'),
	// 粉丝添加邀请码
	addInviteCode: (code) => http.post(`/front/inviteCode/add/${code}`),

	/******************************************
	 * 订单api
	 ******************************************/
	// 代理人获取某个直属的订单列表
	getDirectOrder: (id,status) => http.get(`/front/order/direct/${id}/${status}`),
	// 代理人获取某个粉丝的订单列表
	getFansOrder: (id,status) => http.get(`/front/order/fans/${id}/${status}`),
	// 代理人获取某个间接人的订单列表
	getInDirectOrder: (id,status) => http.get(`/front/order/inDirect/${id}/${status}`),
	// 用户创建订单
	createOrder: (data) => http.post(`/front/order/create`,data),
	// 确认订单接口
	confirmOrder: (orderId) => http.post(`/front/order/confirm/${orderId}`),
	// 获取所有的订单
	getAllOrder: (type,status) => http.get(`/front/order/all/${type}/${status}`),
	// 获取用户自己的订单列表
	getOrderList: (status) => http.get(`/front/order/list/${status}`),
	// 跳转到支付页面接口
	getOrderPay: (orderId) => http.get(`/front/order/pay/${orderId}`),

	/******************************************
	 * 提现api
	 ******************************************/
	// 代理人申请提现
	applyWithdraw: (data) => http.post('/front/withdraw/apply',data),
	// 发送手机验证码
	getVerifyCode: (phone) => http.get(`/front/withdraw/verifyCode/${phone}`),
	// 添加提现需要的银行卡信息
	addBankAccount: (data) => http.post('/front/withdraw/bankAccount',data),
	// 获取提现银行卡信息
	getBankAccountInfo: (type) => http.get(`/front/withdraw/bankAccount/${type}`),
	// 获取提现列表
	getWithdrawList: (data) => http.post('/front/withdraw/list',data),
	//	添加发票接口
	addInvoice: (data) => http.post('/front/withdraw/bill',data),
	
	/******************************************
	 * 文件上传api
	 ******************************************/
	// 上传图片接口
	uploadImg: (data) => http.post('/front/upload',data)

}