if("undefined"!==typeof CommentpressSettings){var cp_wp_adminbar,cp_bp_adminbar,cp_comments_open,cp_special_page,cp_tinymce,cp_promote_reading,cp_is_mobile,cp_is_touch,cp_is_tablet,cp_cookie_path,cp_multipage_page,cp_template_dir,cp_plugin_dir,cp_toc_chapter_is_page,cp_show_subpages,cp_default_sidebar,cp_is_signup_page,cp_scroll_speed,cp_min_page_width;cp_wp_adminbar=CommentpressSettings.cp_wp_adminbar;cp_bp_adminbar=CommentpressSettings.cp_bp_adminbar;cp_comments_open=CommentpressSettings.cp_comments_open;cp_special_page=CommentpressSettings.cp_special_page;cp_tinymce=CommentpressSettings.cp_tinymce;cp_promote_reading=CommentpressSettings.cp_promote_reading;cp_is_mobile=CommentpressSettings.cp_is_mobile;cp_is_touch=CommentpressSettings.cp_is_touch;cp_is_tablet=CommentpressSettings.cp_is_tablet;cp_cookie_path=CommentpressSettings.cp_cookie_path;cp_multipage_page=CommentpressSettings.cp_multipage_page;cp_template_dir=CommentpressSettings.cp_template_dir;cp_plugin_dir=CommentpressSettings.cp_plugin_dir;cp_toc_chapter_is_page=CommentpressSettings.cp_toc_chapter_is_page;cp_show_subpages=CommentpressSettings.cp_show_subpages;cp_default_sidebar=CommentpressSettings.cp_default_sidebar;cp_is_signup_page=CommentpressSettings.cp_is_signup_page;cp_scroll_speed=CommentpressSettings.cp_js_scroll_speed;cp_min_page_width=CommentpressSettings.cp_min_page_width}var msie6,cp_wp_adminbar_height,cp_header_height,cp_header_animating,cp_toc_on_top,page_highlight,cp_header_minimised,cp_sidebar_minimised,cp_container_top_max,cp_container_top_min;msie6=false;if("undefined"!==typeof cp_msie6){msie6=true}cp_wp_adminbar_height=28;cp_header_height=70;cp_header_animating=false;page_highlight=false;if(cp_bp_adminbar=="y"){cp_wp_adminbar_height=25;cp_wp_adminbar="y"}if(cp_wp_adminbar=="y"){}jQuery(window).resize(function(){setSidebarHeight()});function cp_page_setup(){var b,c,d,a;b="";if(document.getElementById){b+='<style type="text/css" media="screen">';b+="ul.all_comments_listing div.item_body { display: none; } ";if(cp_wp_adminbar=="y"){b+="#header { top: "+cp_wp_adminbar_height+"px; } ";b+="#sidebar, #navigation { top: "+(cp_wp_adminbar_height+cp_header_height)+"px; } "}if(cp_show_subpages=="0"){b+="#toc_sidebar .sidebar_contents_wrapper ul li ul { display: none; } ";b+="#toc_sidebar .sidebar_contents_wrapper ul li.current_page_ancestor > ul { display: block; } "}if(cp_special_page=="0"){b+="#respond { display: none; } "}b+="#sidebar .paragraph_wrapper { display: none; } ";b+="#navigation .paragraph_wrapper { display: none; } ";b+="#sidebar .paragraph_wrapper.start_open { display: block; } ";b+="#navigation .paragraph_wrapper.start_open { display: block; } ";b+=".commentpress_page #navigation .paragraph_wrapper.special_pages_wrapper { display: block; } ";b+="</style>"}document.write(b)}cp_page_setup();function commentpress_get_header_offset(){var a;a=0-jQuery("#header").height()-jQuery("#sidebar_tabs").height();if(cp_wp_adminbar=="y"){a-=cp_wp_adminbar_height}return a}function commentpress_scroll_page(a){if(msie6){jQuery(window).scrollTo(0,0);jQuery("#main_wrapper").scrollTo(a,{duration:(cp_scroll_speed*1.5),axis:"y",offset:commentpress_get_header_offset()},function(){jQuery(window).scrollTo(0,1)})}else{if(cp_is_mobile=="0"||cp_is_tablet=="1"){jQuery.scrollTo(a,{duration:(cp_scroll_speed*1.5),axis:"y",offset:commentpress_get_header_offset()})}}}function cp_quick_scroll_page(b,a){if(msie6){jQuery(window).scrollTo(0,0);jQuery("#main_wrapper").scrollTo(b,{duration:(a*1.5),axis:"y",offset:commentpress_get_header_offset()},function(){jQuery(window).scrollTo(0,1)})}else{if(cp_is_mobile=="0"||cp_is_tablet=="1"){jQuery.scrollTo(b,{duration:(a*1.5),axis:"y",offset:commentpress_get_header_offset()})}}}function commentpress_scroll_to_top(b,a){if(msie6){jQuery("#main_wrapper").scrollTo(b,{duration:a})}else{if(cp_is_mobile=="0"||cp_is_tablet=="1"){jQuery.scrollTo(b,a)}}}function cp_flash_comment_header(a){return}function cp_scroll_comments(c,b,a){switch(arguments.length){case 2:a="noflash";break;case 3:break;default:throw new Error("illegal argument count")}if(cp_is_mobile=="0"||cp_is_tablet=="1"){if(a=="flash"){jQuery("#comments_sidebar .sidebar_contents_wrapper").scrollTo(c,{duration:b,onAfter:function(){cp_flash_comment_header(c)}})}else{jQuery("#comments_sidebar .sidebar_contents_wrapper").scrollTo(c,{duration:b})}}}function commentpress_setup_comment_headers(){jQuery(".comment-wrapper").unbind("mouseenter");jQuery(".comment-wrapper").unbind("mouseleave");jQuery(".comment-wrapper").mouseenter(function(a){jQuery(this).addClass("background-highlight")});jQuery(".comment-wrapper").mouseleave(function(a){jQuery(this).removeClass("background-highlight")});if(cp_special_page=="1"){return}jQuery("a.comment_block_permalink").unbind("click");jQuery("a.comment_block_permalink").css("cursor","pointer");jQuery("a.comment_block_permalink").click(function(d){var k,i,b,f,g,c,h,a,j,e;d.preventDefault();k=jQuery(this).parent().prop("id").split("para_heading-")[1];i=jQuery(this).parent().next("div.paragraph_wrapper");b=jQuery("#para_wrapper-"+k).find("ol.commentlist");f=false;g=i.css("display");if(g=="none"){f=true}if("undefined"!==typeof k){if(k!=""&&k!="pingbacksandtrackbacks"){c=jQuery("#textblock-"+k);if(f){jQuery.unhighlight_para();jQuery.highlight_para(c);commentpress_scroll_page(c)}else{if(cp_promote_reading=="0"){if(jQuery("#para_wrapper-"+k).find("#respond")[0]){jQuery.unhighlight_para()}else{if(!b[0]){jQuery.unhighlight_para();jQuery.highlight_para(c);commentpress_scroll_page(c)}}}else{if(jQuery.is_highlighted(c)){jQuery.unhighlight_para()}}}}else{jQuery.unhighlight_para();if(k!="pingbacksandtrackbacks"){commentpress_scroll_to_top(0,cp_scroll_speed);page_highlight=!page_highlight}}}if(cp_promote_reading=="0"&&k!="pingbacksandtrackbacks"){if(cp_comments_open=="y"){h=jQuery("#comment_post_ID").prop("value");a=jQuery("#para_wrapper-"+k+" .reply_to_para").prop("id");j=a.split("-")[1];e=jQuery("#para_wrapper-"+k).find("#respond")[0];if(b.length>0&&b[0]){if(!f&&!e){}else{addComment.moveFormToPara(j,k,h)}}else{if(!e){i.css("display","none");f=true}addComment.moveFormToPara(j,k,h)}}}i.slideToggle("slow",function(){if(f){cp_scroll_comments(jQuery("#para_heading-"+k),cp_scroll_speed)}});return false})}function cp_get_text_sig_by_comment_id(e){var c,a,b,d;b="";if(e.match("#comment-")){c=parseInt(e.split("#comment-")[1])}a=jQuery("#comment-"+c).parents("div.paragraph_wrapper").map(function(){return this});if(a.length>0){d=jQuery(a[0]);b=d.prop("id").split("-")[1]}return b}function commentpress_scroll_page_to_textblock(a){var b;if(a!=""){b=jQuery("#textblock-"+a);jQuery.highlight_para(b);commentpress_scroll_page(b)}else{if(page_highlight===false){commentpress_scroll_to_top(0,cp_scroll_speed)}page_highlight=!page_highlight}}function commentpress_enable_comment_permalink_clicks(){jQuery("a.comment_permalink").unbind("click");jQuery("a.comment_permalink").click(function(d){var c,a,b;d.preventDefault();c=this.href.split("#")[1];if(cp_special_page=="1"){a=commentpress_get_header_offset();jQuery.scrollTo(jQuery("#"+c),{duration:cp_scroll_speed,axis:"y",offset:a})}else{jQuery.unhighlight_para();b=cp_get_text_sig_by_comment_id("#"+c);if(b!="pingbacksandtrackbacks"){commentpress_scroll_page_to_textblock(b)}cp_scroll_comments(jQuery("#"+c),cp_scroll_speed)}return false})}function commentpress_setup_context_headers(){jQuery("h3.activity_heading").unbind("click");jQuery("h3.activity_heading").css("cursor","pointer");jQuery("h3.activity_heading").click(function(b){var a;b.preventDefault();a=jQuery(this).next("div.paragraph_wrapper");a.css("width",jQuery(this).parent().css("width"));a.slideToggle("slow",function(){a.css("width","auto")});return false})}function cp_enable_context_clicks(){if(cp_special_page=="1"){return}jQuery("a.comment_on_post").unbind("click");jQuery("a.comment_on_post").click(function(f){var d,g,a,e,b,c;f.preventDefault();cp_activate_sidebar("comments");d=this.href.split("#")[1];g=jQuery("#"+d);a=g.parents("div.paragraph_wrapper").map(function(){return this});if(a.length>0){e=jQuery(a[0]);e.show();if(cp_special_page=="1"){b=commentpress_get_header_offset();jQuery.scrollTo(g,{duration:cp_scroll_speed,axis:"y",offset:b})}else{jQuery.unhighlight_para();c=e.prop("id").split("-")[1];commentpress_scroll_page_to_textblock(c);jQuery("#comments_sidebar .sidebar_contents_wrapper").scrollTo(g,{duration:cp_scroll_speed,onAfter:function(){cp_flash_comment_header(g)}})}}return false})}function cp_scroll_to_anchor_on_load(){var i,d,e,h,j,a,g,f,c;i="";d=document.location.toString();if(d.match("#comment-")){cp_activate_sidebar("comments");e=d.split("#comment-")[1];h=jQuery("#comment-"+e).parents("div.paragraph_wrapper").map(function(){return this});if(h.length>0){j=jQuery(h[0]);if(cp_comments_open=="y"){i=j.prop("id").split("-")[1];a=jQuery("#para_wrapper-"+i+" .reply_to_para").prop("id");g=a.split("-")[1];f=jQuery("#comment_post_ID").prop("value");if(cp_tinymce=="1"){if(jQuery("#comment-"+e+" > .reply").text()!=""){cp_tinymce="0";addComment.moveForm("comment-"+e,e,"respond",f,i);cp_tinymce="1"}}else{addComment.moveForm("comment-"+e,e,"respond",f,i)}}j.show();cp_scroll_comments(jQuery("#comment-"+e),1,"flash");if(i!=""){c=jQuery("#textblock-"+i);jQuery.highlight_para(c);commentpress_scroll_page(c)}else{if(page_highlight===false){commentpress_scroll_to_top(0,cp_scroll_speed)}page_highlight=!page_highlight}return}}else{jQuery("span.para_marker > a").each(function(n){var o,l,k,m,p;o=jQuery(this).prop("id");if(d.match("#"+o)||d.match("#para_heading-"+o)){if(cp_comments_open=="y"){l=jQuery("#para_wrapper-"+o+" .reply_to_para").prop("id");k=l.split("-")[1];m=jQuery("#comment_post_ID").prop("value");addComment.moveFormToPara(k,o,m)}jQuery("#para_heading-"+o).next("div.paragraph_wrapper").show();cp_scroll_comments(jQuery("#para_heading-"+o),1);p=jQuery("#textblock-"+o);jQuery.highlight_para(p);commentpress_scroll_page(p);return}})}if(d.match("#respond")){jQuery("h3#para_heading- a.comment_block_permalink").click();return}if(d.match("#")){var b=d.split("#")[1];if(b!=""){jQuery("#"+b).addClass("selected_para");commentpress_scroll_page(jQuery("#"+b))}return}}function cp_scroll_to_comment_on_load(){var a,b,c;a=document.location.toString();if(a.match("#comment-")){b=a.split("#comment-")[1];c=jQuery("#comment-"+b);if(c){if(msie6){jQuery("#main_wrapper").scrollTo(c,{duration:cp_scroll_speed,axis:"y",offset:commentpress_get_header_offset()})}else{if(cp_is_mobile=="0"||cp_is_tablet=="1"){jQuery.scrollTo(c,{duration:cp_scroll_speed,axis:"y",offset:commentpress_get_header_offset()})}}}}}function cp_do_comment_icon_action(l,i){if(!jQuery("body").hasClass("active-sidebar")||jQuery("body").hasClass("active-nav")){showSidebar()}cp_activate_sidebar("comments");var j,b,d,h,e,g,c,f,a,k;j=jQuery("#para_heading-"+l).next("div.paragraph_wrapper");b=jQuery("#para_wrapper-"+l+" .commentlist");d=j.find("#respond");h=addComment.getLevel();e=false;g=j.css("display");if(g=="none"){e=true}jQuery.unhighlight_para();if(l!=""){c=jQuery("#textblock-"+l);if(cp_promote_reading=="1"&&!e){}else{jQuery.highlight_para(c);commentpress_scroll_page(c)}}if(cp_promote_reading=="0"){if(cp_comments_open=="y"){f=jQuery("#comment_post_ID").prop("value");a=jQuery("#para_wrapper-"+l+" .reply_to_para").prop("id");k=a.split("-")[1]}if(!d[0]){if(cp_comments_open=="y"){addComment.moveFormToPara(k,l,f)}}if(d[0]&&!h){if(cp_comments_open=="y"){addComment.moveFormToPara(k,l,f);if(i=="marker"){cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}else{cp_scroll_comments(jQuery("#respond"),cp_scroll_speed)}}else{cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}return}if(!d[0]&&b[0]&&!e){if(cp_comments_open=="y"){if(i=="marker"){cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}else{cp_scroll_comments(jQuery("#respond"),cp_scroll_speed)}}else{cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}return}if(!e&&b[0]){if(cp_comments_open=="y"){if(i=="marker"){cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}else{cp_scroll_comments(jQuery("#respond"),cp_scroll_speed)}}else{cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}return}if(d[0]&&!b[0]&&!e){if(cp_comments_open=="y"){if(i=="marker"){cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}else{cp_scroll_comments(jQuery("#respond"),cp_scroll_speed)}}else{cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}return}if(!e&&!b[0]){j.css("display","none");e=true}}j.slideToggle("slow",function(){if(cp_promote_reading=="1"&&e){cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}else{if(e){if(cp_comments_open=="y"){if(i=="marker"){cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}else{cp_scroll_comments(jQuery("#respond"),cp_scroll_speed)}}else{cp_scroll_comments(jQuery("#para_heading-"+l),cp_scroll_speed)}}}})}function commentpress_setup_para_permalink_icons(){jQuery("a.para_permalink").unbind("click");jQuery("a.para_permalink").click(function(b){var a;b.preventDefault();a=jQuery(this).prop("href").split("#")[1];cp_do_comment_icon_action(a,"auto");return false});jQuery("a.para_permalink").unbind("mouseenter");jQuery("a.para_permalink").unbind("mouseleave");jQuery("a.para_permalink").mouseenter(function(b){var a;a=jQuery(this).prop("href").split("#")[1];jQuery("span.para_marker a#"+a).addClass("js-hover")});jQuery("a.para_permalink").mouseleave(function(b){var a;a=jQuery(this).prop("href").split("#")[1];jQuery("span.para_marker a#"+a).removeClass("js-hover")})}function commentpress_setup_page_click_actions(){jQuery(".post_title a").unbind("click");jQuery(".post_title a").click(function(b){b.preventDefault();var a="";cp_do_comment_icon_action(a,"marker");return false});jQuery(".textblock").unbind("click");jQuery(".textblock").click(function(b){var a;a=jQuery(this).prop("id");a=a.split("textblock-")[1];cp_do_comment_icon_action(a,"marker")});jQuery("span.para_marker a").unbind("click");jQuery("span.para_marker a").click(function(b){b.preventDefault();var a;a=jQuery(this).prop("href").split("#")[1];cp_do_comment_icon_action(a,"marker");return false});jQuery("span.para_marker a").unbind("mouseenter");jQuery("span.para_marker a").unbind("mouseleave");jQuery("span.para_marker a").mouseenter(function(a){var b;b=jQuery(this).parent().next().children(".comment_count");b.addClass("js-hover")});jQuery("span.para_marker a").mouseleave(function(a){var b;b=jQuery(this).parent().next().children(".comment_count");b.removeClass("js-hover")})}function commentpress_setup_para_links(){jQuery("a.cp_para_link").unbind("click");jQuery("a.cp_para_link").click(function(b){var a;b.preventDefault();a=jQuery(this).prop("href").split("#")[1];cp_do_comment_icon_action(a,"auto");return false})}function commentpress_setup_footnotes_compatibility(){jQuery("span.footnotereverse a, a.footnote-back-link").unbind("click");jQuery("span.footnotereverse a, a.footnote-back-link").click(function(a){var b;a.preventDefault();b=jQuery(this).prop("href").split("#")[1];cp_quick_scroll_page("#"+b,100);return false});jQuery(".simple-footnotes ol li > a").unbind("click");jQuery(".simple-footnotes ol li > a").click(function(a){var b;b=jQuery(this).prop("href");if(b.match("#return-note-")){a.preventDefault();b=b.split("#")[1];cp_quick_scroll_page("#"+b,100);return false}});jQuery("a.simple-footnote, sup.footnote a, sup a.footnote-identifier-link, a.zp-ZotpressInText").unbind("click");jQuery("a.simple-footnote, sup.footnote a, sup a.footnote-identifier-link, a.zp-ZotpressInText").click(function(a){var b;a.preventDefault();b=jQuery(this).prop("href").split("#")[1];cp_quick_scroll_page("#"+b,100);return false})}function cp_activate_sidebar(d){if(d=="comments"){if(!jQuery("body").hasClass("active-sidebar")||jQuery("body").hasClass("active-nav")){showSidebar()}}var b,c,a;b=jQuery("#"+d+"_sidebar").css("z-index");if(b=="2001"){jQuery(".sidebar_container").css("z-index","2001");jQuery("#sidebar_tabs h2 a").removeClass("active-tab");jQuery("#"+d+"_sidebar").css("z-index","2010");jQuery("#sidebar_tabs #"+d+"_header h2 a").addClass("active-tab")}}jQuery("html").addClass("js");var setSidebarHeight=function(){var f=jQuery(window).height();var h=jQuery("#header").height();var e=jQuery("#switcher").height();var a=jQuery("#toc_sidebar > .sidebar_header").height();var b=jQuery("#wpadminbar").height();var d=f-(h+a+b);var c=jQuery("#switcher").css("display");if(c==="block"){d=d-e}jQuery("#toc_sidebar .sidebar_contents_wrapper").css("height",d+"px");var i=jQuery("#sidebar_tabs").height();var g=f-(h+i+b);if(c==="block"){g=g-e}jQuery("#sidebar .sidebar_contents_wrapper").css("height",g+"px")};var showMenu=function(){jQuery("body").toggleClass("active-nav").removeClass("active-sidebar");jQuery(".sidebar-button,.content-button").removeClass("active-button");jQuery(".navigation-button").toggleClass("active-button")};var showContent=function(){jQuery("body").removeClass("active-sidebar").removeClass("active-nav");jQuery(".navigation-button,.sidebar-button").removeClass("active-button");jQuery(".content-button").toggleClass("active-button")};var showSidebar=function(){jQuery("body").toggleClass("active-sidebar").removeClass("active-nav");jQuery(".navigation-button,.content-button").removeClass("active-button");jQuery(".sidebar-button").toggleClass("active-button")};jQuery(document).ready(function(a){setSidebarHeight();commentpress_setup_comment_headers();commentpress_setup_comment_headers();commentpress_enable_comment_permalink_clicks();commentpress_setup_para_permalink_icons();commentpress_setup_page_click_actions();commentpress_setup_para_links();cp_enable_context_clicks();commentpress_setup_context_headers();commentpress_setup_footnotes_compatibility();a(".navigation-button").click(function(b){b.preventDefault();showMenu()});a(".content-button").click(function(b){b.preventDefault();showContent()});a(".sidebar-button").click(function(b){b.preventDefault();showSidebar()});a("#activity_header h2 a").click(function(b){b.preventDefault();cp_activate_sidebar("activity");return false});a("#comments_header h2 a").click(function(b){b.preventDefault();cp_activate_sidebar("comments");return false});a("a.para_permalink").click(function(b){b.preventDefault();return false});a("a.comment_block_permalink").click(function(b){b.preventDefault();return false});a("#cp_minimise_all_comments").click(function(b){b.preventDefault();a("#comments_sidebar div.paragraph_wrapper").slideUp();a.unhighlight_para()});a("#cp_minimise_all_activity").click(function(b){b.preventDefault();a("#activity_sidebar div.paragraph_wrapper").slideUp()});a("#toc_sidebar .sidebar_contents_wrapper ul#toc_list li a").click(function(c){if(cp_toc_chapter_is_page=="0"){var b;b=a(this).parent().find("ul");if(b.length>0){if(cp_show_subpages=="0"){a(this).next("ul").slideToggle()}c.preventDefault();return false}}});a("#literal .post").css("display","none");a("#original .post").css("display","none");a("#content-tabs li h2 a").click(function(c){var b;c.preventDefault();b=this.href.split("#")[1];a(".post").css("display","none");a(".workflow-wrapper").css("min-height","0");a(".workflow-wrapper").css("padding-bottom","0");a("#"+b+".workflow-wrapper").css("min-height",content_min_height);a("#"+b+".workflow-wrapper").css("padding-bottom",content_padding_bottom);a("#"+b+" .post").css("display","block");a("#content-tabs li").removeClass("default-content-tab");a(this).parent().parent().addClass("default-content-tab");return false});if(cp_special_page=="1"){cp_scroll_to_comment_on_load()}else{cp_scroll_to_anchor_on_load()}});