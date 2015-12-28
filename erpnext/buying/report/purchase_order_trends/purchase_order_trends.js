// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.require("assets/erpnext/js/purchase_trends_filters.js");

frappe.query_reports["Purchase Order Trends"] = {
	filters: get_filters()
 }