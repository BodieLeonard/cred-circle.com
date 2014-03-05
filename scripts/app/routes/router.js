App.Router.map(function () {

  // LOGIN RELATED ROUTES
  this.resource('index', { path: '/' });
  this.resource('login', { path: '/login' });
  this.resource('register', { path: '/register' });
  this.resource('about', { path: '/about' });
  this.resource('newAccount', { path: '/new-account' });
  this.resource('forgotPassword', { path: '/forgot-password' });

  // ROUTES FOR DASHBOARD
  this.resource('dashboard', { path: '/dashboard' }, function() {
    this.resource('dashboard.deal', { path: '/deal/:id' }, function() {
      this.resource('dashboard.deal.preApproval', { path: '/pre-approval' });
      this.resource('dashboard.deal.contract', { path: '/contract' });

      this.resource('dashboard.deal.contact', { path: '/contact' }, function(){
        this.resource('dashboard.deal.contact.buyer', { path: '/buyer' });
        this.resource('dashboard.deal.contact.seller', { path: '/seller' });
        this.resource('dashboard.deal.contact.buyerAgent', { path: '/buyer-agent' });
        this.resource('dashboard.deal.contact.sellerAgent', { path: '/seller-agent' });
        this.resource('dashboard.deal.contact.loanOfficer', { path: '/loan-officer' });
        this.resource('dashboard.deal.contact.escrowOfficer', { path: '/escrow-officer' });
        this.resource('dashboard.deal.contact.hazard', { path: '/hazard' });
        this.resource('dashboard.deal.contact.inspector', { path: '/inspector' });
      });
      this.resource('dashboard.deal.checklist', { path: '/checklist' }, function(){
        this.resource('dashboard.deal.checklist.inspection', { path: '/inspection' });
        this.resource('dashboard.deal.checklist.appraisal', { path: '/appraisal' });
        this.resource('dashboard.deal.checklist.title', { path: '/title' });
        this.resource('dashboard.deal.checklist.survey', { path: '/survey' });
        this.resource('dashboard.deal.checklist.insurance', { path: '/insurance' });
        this.resource('dashboard.deal.checklist.loan', { path: '/loan' });
        this.resource('dashboard.deal.checklist.conditional', { path: '/conditional' });
        this.resource('dashboard.deal.checklist.final', { path: '/final' });
        this.resource('dashboard.deal.checklist.titleDocs', { path: '/title-docs' });
        this.resource('dashboard.deal.checklist.hud', { path: '/hud' });
        this.resource('dashboard.deal.checklist.sellerClosing', { path: '/seller-closing' });
        this.resource('dashboard.deal.checklist.buyerClosing', { path: '/buyer-closing' });
        this.resource('dashboard.deal.checklist.package', { path: '/package' });
      });
    });
  });

  // ROUTES FOR CREATING A NEW DEAL
  this.resource('newDeal', { path: '/new-deal' }, function () {
    this.resource('newDeal.buyer', { path: '/buyer' });
    this.resource('newDeal.seller', { path: '/seller' });
    this.resource('newDeal.buyerAgent', { path: '/buyer-agent' });
    this.resource('newDeal.sellerAgent', { path: '/seller-agent' });
    this.resource('newDeal.loanOfficer', { path: '/loan-officer' });
    this.resource('newDeal.escrowOfficer', { path: '/escrow-officer' });
    this.resource('newDeal.hazard', { path: '/hazard' });
    this.resource('newDeal.inspector', { path: '/inspector' });
  });

  // PROFILE ROUTE
  this.resource('profile', { path: '/profile' });
});