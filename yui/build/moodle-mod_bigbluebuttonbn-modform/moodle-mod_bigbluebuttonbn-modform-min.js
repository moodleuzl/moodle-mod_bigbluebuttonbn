YUI.add("moodle-mod_bigbluebuttonbn-modform",function(e,t){M.mod_bigbluebuttonbn=M.mod_bigbluebuttonbn||{},M.mod_bigbluebuttonbn.modform={bigbluebuttonbn:{},init:function(e){this.bigbluebuttonbn=e,this.update_instance_type_profile()},update_instance_type_profile:function(){var t=e.one("#id_type");this.apply_instance_type_profile(this.bigbluebuttonbn.instance_type_profiles[t.get("value")])},apply_instance_type_profile:function(e){var t=e.features,n=t.includes("all");this.show_fieldset("id_room",n||t.includes("showroom")),this.show_fieldset("id_recordings",n||t.includes("showrecordings")),this.show_fieldset("id_preuploadpresentation",n||t.includes("preuploadpresentation")),this.show_fieldset("id_permissions",n||t.includes("permissions")),this.show_fieldset("id_schedule",n||t.includes("schedule"))},show_fieldset:function(t,n){var r=e.DOM.byId(t);if(!r)return;if(n){e.DOM.setStyle(r,"display","block");return}e.DOM.setStyle(r,"display","none")},participant_selection_set:function(){this.select_clear("bigbluebuttonbn_participant_selection");var e=document.getElementById("bigbluebuttonbn_participant_selection_type");for(var t=0;t<e.options.length;t++)if(e.options[t].selected){var n=this.bigbluebuttonbn.participant_selection[e.options[t].value];for(var r=0;r<n.length;r++)this.select_add_option("bigbluebuttonbn_participant_selection",n[r].name,n[r].id);r===0?(this.select_add_option("bigbluebuttonbn_participant_selection","---------------","all"),this.select_disable("bigbluebuttonbn_participant_selection")):this.select_enable("bigbluebuttonbn_participant_selection")}},participant_list_update:function(){var e=document.getElementsByName("participants")[0];e.value=JSON.stringify(this.bigbluebuttonbn.participant_list).replace(/"/g,"&quot;")},participant_remove:function(e,t){for(var n=0;n<this.bigbluebuttonbn.participant_list.length;n++)this.bigbluebuttonbn.participant_list[n].selectiontype==e&&this.bigbluebuttonbn.participant_list[n].selectionid==(t===""?null:t)&&this.bigbluebuttonbn.participant_list.splice(n,1);var r=document.getElementById("participant_list_table");for(var i=0;i<r.rows.length;i++)r.rows[i].id=="participant_list_tr_"+e+"-"+t&&r.deleteRow(n);this.participant_list_update()},participant_add:function(){var e=document.getElementById("bigbluebuttonbn_participant_selection_type"),t=document.getElementById("bigbluebuttonbn_participant_selection");for(var n=0;n<this.bigbluebuttonbn.participant_list.length;n++)if(this.bigbluebuttonbn.participant_list[n].selectiontype==e.value&&this.bigbluebuttonbn.participant_list[n].selectionid==t.value)return;this.participant_add_to_memory(e,t),this.participant_add_to_form(e,t)},participant_add_to_memory:function(e,t){this.bigbluebuttonbn.participant_list.push({selectiontype:e.value,selectionid:t.value,role:"viewer"})},participant_add_to_form:function(e,t){var n=document.getElementById("participant_list_table"),r=n.insertRow(n.rows.length);r.id="participant_list_tr_"+e.value+"-"+t.value;var i=r.insertCell(0);i.width="125px",i.innerHTML="<b><i>"+e.options[e.selectedIndex].text,i.innerHTML+=(e.value!=="all"?":&nbsp;":"")+"</i></b>";var s=r.insertCell(1);s.innerHTML="",e.value!=="all"&&(s.innerHTML=t.options[t.selectedIndex].text);var o;o="&nbsp;<i>"+this.bigbluebuttonbn.strings.as+'</i>&nbsp;<select id="participant_list_role_',o+=e.value+"-"+t.value,o+='" onchange="this.participant_list_role_update(\'',o+=e.value+"', '"+t.value,o+='\'); return 0;" class="select custom-select"><option value="viewer" selected="selected">',o+=this.bigbluebuttonbn.strings.viewer+'</option><option value="moderator">',o+=this.bigbluebuttonbn.strings.moderator+"</option></select>";var u=r.insertCell(2);u.innerHTML=o;var a=r.insertCell(3);a.width="20px",o="<a onclick=\"this.participant_remove('",o+=e.value+"', '"+t.value,o+='\'); return 0;" title="'+this.bigbluebuttonbn.strings.remove+'">x</a>',this.bigbluebuttonbn.icons_enabled&&(o='<a class="action-icon" onclick="this.participant_remove(\'',o+=e.value+"', '",o+=t.value+'\'); return 0;"><img class="btn icon smallicon" alt="',o+=this.bigbluebuttonbn.strings.remove+'" title="'+this.bigbluebuttonbn.strings.remove+'" src="',o+=this.bigbluebuttonbn.pix_icon_delete+'"></img></a>'),a.innerHTML=o},participant_list_role_update:function(e,t){var n=document.getElementById("participant_list_role_"+e+"-"+t);for(var r=0;r<this.bigbluebuttonbn.participant_list.length;r++)this.bigbluebuttonbn.participant_list[r].selectiontype==e&&this.bigbluebuttonbn.participant_list[r].selectionid==(t===""?null:t)&&(this.bigbluebuttonbn.participant_list[r].role=n.value);this.participant_list_update()},select_clear:function(e){var t=document.getElementById(e);while(t.length>0)t.remove(t.length-1)},select_enable:function(e){var t=document.getElementById(e);t.disabled=!1},select_disable:function(e){var t=document.getElementById(e);t.disabled=!0},select_add_option:function(e,t,n){var r=document.getElementById(e),i=document.createElement("option");i.text=t,i.value=n,r.add(i,0)}}},"@VERSION@",{requires:["base","node"]});