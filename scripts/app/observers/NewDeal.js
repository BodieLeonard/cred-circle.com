/**
 * Setup model for new deal
 */
NewDeal = Ember.Object.extend({

  buyerFirstName: function() {
    var buyerFirstName = this.get("buyerFirstName");
    return { buyerFirstName:buyerFirstName }
  }.property("buyerFirstName"),

  buyerLastName: function() {
    var buyerLastName = this.get("buyerLastName");
    return { buyerLastName:buyerLastName }
  }.property("buyerLastName"),

  buyerEmail: function() {
    var buyerEmail = this.get("buyerEmail");
    return { buyerEmail:buyerEmail }
  }.property("buyerEmail"),

  sellerFirstName: function() {
    var sellerFirstName = this.get("sellerFirstName");
    return { sellerFirstName:sellerFirstName }
  }.property("sellerFirstName"),

  sellerLastName: function() {
    var sellerLastName = this.get("sellerLastName");
    return { sellerLastName:sellerLastName }
  }.property("sellerLastName"),

  sellerEmail: function() {
    var sellerEmail = this.get("sellerEmail");
    return { sellerEmail:sellerEmail }
  }.property("sellerEmail"),

  buyerAgentFirstName: function() {
    var buyerAgentFirstName = this.get("buyerAgentFirstName");
    return { buyerAgentFirstName:buyerAgentFirstName }
  }.property("buyerAgentFirstName"),

  buyerAgentLastName: function() {
    var buyerAgentLastName = this.get("buyerAgentLastName");
    return { buyerAgentLastName:buyerAgentLastName }
  }.property("buyerAgentLastName"),

  buyerAgentEmail: function() {
    var buyerAgentEmail = this.get("buyerAgentEmail");
    return { buyerAgentEmail:buyerAgentEmail }
  }.property("buyerAgentEmail"),

  sellerAgentFirstName: function() {
    var sellerAgentFirstName = this.get("sellerAgentFirstName");
    return { sellerAgentFirstName:sellerAgentFirstName }
  }.property("sellerAgentFirstName"),

  sellerAgentLastName: function() {
    var sellerAgentLastName = this.get("sellerAgentLastName");
    return { sellerAgentLastName:sellerAgentLastName }
  }.property("sellerAgentLastName"),

  sellerAgentEmail: function() {
    var sellerAgentEmail = this.get("sellerAgentEmail");
    return { sellerAgentEmail:sellerAgentEmail }
  }.property("sellerAgentEmail"),

  loanOfficerFirstName: function() {
    var loanOfficerFirstName = this.get("loanOfficerFirstName");
    return { loanOfficerFirstName:loanOfficerFirstName }
  }.property("loanOfficerFirstName"),

  loanOfficerLastName: function() {
    var loanOfficerLastName = this.get("loanOfficerLastName");
    return { loanOfficerLastName:loanOfficerLastName }
  }.property("loanOfficerLastName"),

  loanOfficerEmail: function() {
    var loanOfficerEmail = this.get("loanOfficerEmail");
    return { loanOfficerEmail:loanOfficerEmail }
  }.property("loanOfficerEmail"),

  escrowOfficerFirstName: function() {
    var escrowOfficerFirstName = this.get("escrowOfficerFirstName");
    return { escrowOfficerFirstName:escrowOfficerFirstName }
  }.property("escrowOfficerFirstName"),

  escrowOfficerLastName: function() {
    var escrowOfficerLastName = this.get("escrowOfficerLastName");
    return { escrowOfficerLastName:escrowOfficerLastName }
  }.property("escrowOfficerLastName"),

  escrowOfficerEmail: function() {
    var escrowOfficerEmail = this.get("escrowOfficerEmail");
    return { escrowOfficerEmail:escrowOfficerEmail }
  }.property("escrowOfficerEmail"),

  hazardFirstName: function() {
    var hazardFirstName = this.get("hazardFirstName");
    return { hazardFirstName:hazardFirstName }
  }.property("hazardFirstName"),

  hazardLastName: function() {
    var hazardLastName = this.get("hazardLastName");
    return { hazardLastName:hazardLastName }
  }.property("hazardLastName"),

  hazardEmail: function() {
    var hazardEmail = this.get("hazardEmail");
    return { hazardEmail:hazardEmail }
  }.property("hazardEmail"),

  inspectorFirstName: function() {
    var inspectorFirstName = this.get("inspectorFirstName");
    return { inspectorFirstName:inspectorFirstName }
  }.property("inspectorFirstName"),

  inspectorLastName: function() {
    var inspectorLastName = this.get("inspectorLastName");
    return { inspectorLastName:inspectorLastName }
  }.property("inspectorLastName"),

  inspectorEmail: function() {
    var inspectorEmail = this.get("inspectorEmail");
    return { inspectorEmail:inspectorEmail }
  }.property("inspectorEmail"),

  salesPrice: function() {
    var salesPrice = this.get("salesPrice");
    return { salesPrice:salesPrice }
  }.property("salesPrice"),

  downPayment: function() {
    var downPayment = this.get("downPayment");
    return { downPayment:downPayment }
  }.property("downPayment"),

  loanAmount: function() {
    var loanAmount = this.get("loanAmount");
    return { loanAmount:loanAmount }
  }.property("loanAmount"),

  concession: function() {
    var concession = this.get("concession");
    return { concession:concession }
  }.property("concession"),

  annualTaxes: function() {
    var annualTaxes = this.get("annualTaxes");
    return { annualTaxes:annualTaxes }
  }.property("annualTaxes"),

  annualHOADues: function() {
    var annualHOADues = this.get("annualHOADues");
    return { annualHOADues:annualHOADues }
  }.property("annualHOADues")

});

var newDeal = NewDeal.create({
  buyerFirstName: { buyerFirstName: "buyerFirstName"},
  buyerLastName: { buyerLastName: "buyerLastName"},
  buyerEmail: { buyerEmail: "buyerEmail"},
  sellerFirstName: { sellerFirstName: "sellerFirstName"},
  sellerLastName: { sellerLastName: "sellerLastName"},
  sellerEmail: { sellerEmail: "sellerEmail"},
  buyerAgentFirstName: { buyerAgentFirstName: "buyerAgentFirstName"},
  buyerAgentLastName: { buyerAgentLastName: "buyerAgentLastName"},
  buyerAgentEmail: { buyerAgentEmail: "buyerAgentEmail"},
  sellerAgentFirstName: { sellerAgentFirstName: "sellerAgentFirstName"},
  sellerAgentLastName: { sellerAgentLastName: "sellerAgentLastName"},
  sellerAgentEmail: { sellerAgentEmail: "sellerAgentEmail"},
  loanOfficerFirstName: { loanOfficerFirstName: "loanOfficerFirstName"},
  loanOfficerLastName: { loanOfficerLastName: "loanOfficerLastName"},
  loanOfficerEmail: { loanOfficerEmail: "loanOfficerEmail"},
  escrowOfficerFirstName: { escrowOfficerFirstName: "escrowOfficerFirstName"},
  escrowOfficerLastName: { escrowOfficerLastName: "escrowOfficerLastName"},
  escrowOfficerEmail: { escrowOfficerEmail: "escrowOfficerEmail"},
  hazardFirstName: { hazardFirstName: "hazardFirstName"},
  hazardLastName: { hazardLastName: "hazardLastName"},
  hazardEmail: { hazardEmail: "hazardEmail"},
  inspectorFirstName: {inspectorFirstName: "inspectorFirstName"},
  inspectorLastName: {inspectorLastName: "inspectorLastName"},
  inspectorEmail: {inspectorEmail: "inspectorEmail"},
  salesPrice: {salesPrice: "salesPrice"},
  downPayment: {downPayment: "downPayment"},
  loanAmount: {loanAmount: "loanAmount"},
  concession: {concession: "concession"},
  annualTaxes: {annualTaxes: "annualTaxes"},
  annualHOADues: {annualHOADues: "annualHOADues"}

});

newDeal.addObserver("buyerFirstName", function(e) {  });
newDeal.addObserver("buyerLastName", function(e) {  });
newDeal.addObserver("buyerEmail", function(e) {  });
newDeal.addObserver("sellerFirstName", function(e) {  });
newDeal.addObserver("sellerLastName", function(e) {  });
newDeal.addObserver("sellerEmail", function(e) {  });
newDeal.addObserver("buyerAgentFirstName", function(e) {  });
newDeal.addObserver("buyerAgentLastName", function(e) {  });
newDeal.addObserver("buyerAgentEmail", function(e) {  });
newDeal.addObserver("sellerAgentFirstName", function(e) {  });
newDeal.addObserver("sellerAgentLastName", function(e) {  });
newDeal.addObserver("sellerAgentEmail", function(e) {  });
newDeal.addObserver("loanOfficerFirstName", function(e) {  });
newDeal.addObserver("loanOfficerLastName", function(e) {  });
newDeal.addObserver("loanOfficerEmail", function(e) {  });
newDeal.addObserver("escrowOfficerFirstName", function(e) {  });
newDeal.addObserver("escrowOfficerLastName", function(e) {  });
newDeal.addObserver("escrowOfficerEmail", function(e) {  });
newDeal.addObserver("hazzardFirstName", function(e) {  });
newDeal.addObserver("hazzardLastName", function(e) {  });
newDeal.addObserver("hazzardEmail", function(e) {  });
newDeal.addObserver("inspectorFirstName", function(e) {  });
newDeal.addObserver("inspectorLastName", function(e) {  });
newDeal.addObserver("inspectorEmail", function(e) {  });
newDeal.addObserver("salesPrice", function(e) {  });
newDeal.addObserver("downPayment", function(e) {  });
newDeal.addObserver("loanAmount", function(e) {  });
newDeal.addObserver("concession", function(e) {  });
newDeal.addObserver("annualTaxes", function(e) {  });
newDeal.addObserver("annualHOADues", function(e) {  });


