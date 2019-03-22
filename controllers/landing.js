
const models = require('../models');

exports.getLanding = function(req, res, next) {
    res.render('landing', { title: 'Express lalala' });
};


exports.submitLead = function(req, res, next) {
    // console.log("lead email:", req.body.lead_email);
    return models.Lead.create({
        email: req.body.lead_email
    }).then( lead => {
        res.redirect('/leads');
    })
};

exports.showLeads = function(req, res, next) {
    // res.render('landing', { title: 'here another place' });
    return models.Lead.findAll().then(leads => {
        res.render('landing', { title: 'List of emails', leads: leads })
    })
};

exports.showLead = function(req, res, next) {
    return models.Lead.findOne({
        where: {
            id: req.params.leadId
        }
    }).then ( lead => {
        res.render('lead', { lead: lead });
    })
};

exports.showEditLead = function(req, res, next) {
    return models.Lead.findOne({
        where: {
            id: req.params.leadId
        }
    }).then ( lead => {
        res.render('lead/editLEad', { lead: lead });
    })
};

exports.editLead = function(req, res, next) {
    return models.Lead.update({
        email: req.body.lead_email
    }, {
        where: {
            id : req.params.leadId
        }
    }).then(result => {
        res.redirect('/lead/' + req.params.leadId);
    })
};
