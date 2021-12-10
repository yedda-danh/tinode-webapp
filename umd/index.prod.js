(() => {
  "use strict";
  var e = (e, t, s) => {
      const a = React;
      var n = s.n(a);
      const i = ReactDOM;
      var o = s.n(i);
      const l = ReactIntl,
        r = JSON.parse(
          '{"de":{"validate_credential_action":"bestätigen","title_tag_manager":"Schlagworte (Nutzer entdecken)","label_user_contacts":"Kontakte:","button_add_another":"Hinzufügen","label_message_sound":"Benachrichtigungston:","label_push_notifications":"Benachrichtigungsmeldungen:","label_push_notifications_disabled":"Benachrichtigungsmeldungen (erfordert HTTPS):","label_incognito_mode":"inkognito-Modus:","delete_account":"Konto löschen","delete_account_arning":"Möchten Sie das Konto wirklich löschen? Das kann nicht rückgängig gemacht werden","label_password":"Passwort","password_unchanged_prompt":"unverändert","button_logout":"Abmelden","button_delete_account":"Konto löschen","label_default_access_mode":"Standard Zugriffsmodus:","blocked_contacts_link":"Blockierte Kontakte ({count})","link_contact_us":"Kontakt","link_terms_of_service":"Nutzungsbedingungen","link_privacy_policy":"Datenschutzerklärung","label_sdk":"SDK:","label_server_address":"Server Adresse:","archived_contacts":"Archivierte Kontakte ({count})","contacts_not_found":"Sie haben keine Unterhaltungen<br />¯∖_(ツ)_/¯","full_name_prompt":"Vollständiger Name, z.B. Lisa Musterfrau","email_prompt":"E-Mail, z.B. lisam@beispiel.de","button_sign_up":"Anmelden","label_your_name":"Ihr Name","label_user_id":"ID:","button_edit":"Bearbeiten","requested_permissions":"Angefordert","granted_permissions":"Erteilt","menu_item_edit_permissions":"Berechtigungen ändern","label_other_user":"Andere","action_clear_messages":"Nachrichten leeren","clear_messages_warning":"Sind Sie sicher, dass Sie diese Unterhaltung für alle leeren wollen? Das kann nicht rückgängig gemacht werden.","action_delete_messages":"Nachrichten für alle löschen","delete_messages_warning":"Sind Sie sicher, dass Sie diese Unterhaltung für alle löschen wollen? Das kann nicht rückgängig gemacht werden.","action_leave_chat":"Unterhaltung verlassen","leave_chat_warning":"Möchten Sie diese Unterhaltung wirklich verlassen?","action_block_contact":"Kontakt blockieren","block_contact_warning":"Möchten Sie diesen Kontakt wirklich blockieren?","action_report_chat":"Unterhaltung melden","report_chat_warning":"Möchten Sie diese Unterhaltung wirklich blockieren und melden?","title_info":"Info","label_topic_name":"Name","label_private":"Privater Kommentar","private_editing_placeholder":"Nur für Sie sichtbar","label_muting_topic":"Stumm geschaltet:","action_more":"Mehr","label_your_permissions":"Ihre Berechtigungen:","label_permissions":"Berechtigungen:","label_you":"Sie:","label_default_access":"Standard Zugriffsmodus:","label_group_members":"Gruppenmitglieder:","button_add_members":"Mitglieder hinzufügen","group_has_no_members":"Keine Mitglieder","login_prompt":"Anmelden","password_prompt":"Passwort","stay_logged_in":"Angemeldet bleiben","forgot_password_link":"Passwort vergessen?","button_sign_in":"Anmelden","label_client":"Client:","label_server":"Server:","online_now":"jetzt online","last_seen_timestamp":"Zuletzt gesehen","title_not_found":"Nicht gefunden","unnamed_topic":"Unbenannt","messages_not_readable":"Neue Nachrichten können nicht gelesen werden","peers_messaging_disabled":"Gruppennachrichten sind deaktiviert","enable_peers_messaging":"Aktivieren","search_for_contacts":"Nutzen Sie die Suche um Kontakte zu finden","search_no_results":"Die Suche hatte keine Ergebnisse","tabtitle_find_user":"Suchen","tabtitle_new_group":"Neue Gruppe","tabtitle_group_by_id":"nach ID","new_password_placeholder":"Geben Sie ein neues Passwort ein","label_reset_password":"Passwort per E-Mail wiederherstellen:","credential_email_prompt":"E-Mail Adresse für Registrierung","button_reset":"Zurücksetzen","button_send_request":"Anfrage senden","label_server_to_use":"Server verwenden:","label_wire_transport":"Übertragung per Kabel:","button_update":"Aktualisieren","sidepanel_title_login":"Anmelden","sidepanel_title_register":"Konto erstellen","sidepanel_title_settings":"Einstellungen","sidepanel_title_account_settings":"Konto-Einstellungen","sidepanel_title_acc_general":"Allgemein","sidepanel_title_acc_security":"Sicherheit","sidepanel_title_acc_notifications":"Benachrichtigungen","sidepanel_title_acc_support":"Unterstützung","sidepanel_title_newtpk":"Neue Unterhaltung starten","sidepanel_title_cred":"Anmeldeinformationen bestätigen","sidepanel_title_reset":"Passwort zurücksetzen","sidepanel_title_archive":"Archivierte Unterhaltungen","sidepanel_title_blocked":"Blockierte Unterhaltungen","reconnect_countdown":"Getrennt. Wiederverbinden in {seconds}…","reconnect_now":"Jetzt probieren","push_init_failed":"Initialisierung von Push-Benachrichtigungen fehlgeschlagen","invalid_security_token":"Ungültiger Sicherheitsschlüssel","no_connection":"Keine Verbindung","code_doesnot_match":"Code stimmt nicht überein","update_available":"Aktualisierung verfügbar.","reload_update":"Neu laden","phone_dative":"Telefon","email_dative":"E-Mail","enter_confirmation_code_prompt":"Geben Sie den Bestätigungscode ein, der per {method} geschickt wurde:","numeric_confirmation_code_prompt":"Nur zahlen","button_confirm":"Bestätigen","save_attachment":"Speichern","deleted_content":"Inhalt gelöscht","invalid_content":"ungültiger Inhalt","user_not_found":"Nicht gefunden","badge_you":"Sie","badge_owner":"Besitzer","menu_item_info":"Info","menu_item_clear_messages":"Nachrichten leeren","menu_item_clear_messages_for_all":"Für alle leeren","menu_item_delete":"Löschen","menu_item_delete_for_all":"Für alle löschen","menu_item_send_retry":"Wiederholen","menu_item_mute":"Unterhaltung stumm schalten","menu_item_unmute":"Stumm schalten beenden","menu_item_delete_topic":"Entfernen","topic_delete_warning":"Möchten Sie diese Unterhaltung wirklich löschen?","menu_item_unblock":"Blockierung aufheben","menu_item_block":"Blockieren","topic_block_warning":"Möchten Sie diese Unterhaltung wirklich blockieren?","menu_item_member_delete":"Entfernen","menu_item_archive_topic":"Archivieren","action_cancel":"Abbrechen","upload_finishing":"wird abgeschlossen...","no_contacts":"Sie haben keine Kontakte :-(","contacts_not_found_short":"Keine Kontakte für \'\'{query}\'\'","title_group_members":"Gruppenmitglieder","title_all_contacts":"Alle Kontakte","button_ok":"OK","button_cancel":"Abbrechen","more_online_members":"+{overflow} mehr","download_action":"herunterladen","label_file_name":"Dateiname:","label_content_type":"Inhaltsart:","label_size":"Größe:","chat_invitation":"Sie sind eingeladen, an einem neuen Chat teilzunehmen. Was möchten Sie tun?","chat_invitation_accept":"Akzeptieren","chat_invitation_ignore":"Ignorieren","chat_invitation_block":"Blockieren","error_invalid_id":"ungültige ID","group_user_id_prompt":"Gruppe oder Benutzer ID","button_subscribe":"Abbonieren","topic_name_editing_placeholder":"Freiform Name der Gruppe","button_create":"Erstellen","permission_join":"Beitreten ({val})","permission_read":"Lesen ({val})","permission_write":"Schreiben ({val})","permission_pres":"Benachrichtigt werden ({val})","permission_admin":"Bestätigen ({val})","permission_share":"Teilen ({val})","permission_delete":"Entfernen ({val})","permission_owner":"Besitzer ({val})","title_permissions":"Berechtigungen","message_sending":"wird gesendet...","message_sending_failed":"fehlgeschlagen","search_placeholder":"Liste: email:lisa@beispiel.de, tel:17025550003...","messaging_disabled_prompt":"Nachrichtenübermittlung deaktiviert","new_message_prompt":"Neue Nachricht","image_caption_prompt":"Bildunterschrift","file_attachment_too_large":"Die Dateigröße {size} überschreitet das Limit von {limit}.","cannot_initiate_file_upload":"Datei kann nicht hochgeladen werden.","tags_not_found":"Keine Schlagworte definiert. Erstellen Sie welche.","tags_editor_no_tags":"Schlagworte hinzufügen","title_manage_tags":"Verwalten","channel_prompt":"Dies ist ein Sender","channel":"Sender","drafty_attachment":"Dateianhang","drafty_form":"Formular:","drafty_image":"Bild","topic_delete":"Chat löschen","password_reset_email_sent":"Eine E-Mail wurde an {email} gesendet. Folgen Sie den Anweisungen in der E-Mail, um Ihr Passwort zurückzusetzen.","menu_item_restore_topic":"Wiederherstellen"},"en":{"action_block_contact":"Block Contact","action_cancel":"cancel","action_clear_messages":"Clear Messages","action_delete_messages":"Clear Messages for All","action_leave_chat":"Leave Conversation","action_more":"More","action_report_chat":"Report Conversation","archived_contacts":"Archived contacts ({count})","badge_owner":"owner","badge_you":"you","block_contact_warning":"Are you sure you want to block this contact?","blocked_contacts_link":"Blocked contacts ({count})","button_add_another":"Add another","button_add_members":"Add members","button_cancel":"Cancel","button_confirm":"Confirm","button_create":"Create","button_delete_account":"Delete account","button_edit":"Edit","button_logout":"Logout","button_ok":"OK","button_reset":"Reset","button_send_request":"Send request","button_sign_in":"Sign in","button_sign_up":"Sign up","button_subscribe":"Subscribe","button_update":"Update","cannot_initiate_file_upload":"Cannot initiate file upload.","channel":"channel","channel_prompt":"This is a channel","chat_invitation":"You are invited to start a new chat. What would you like to do?","chat_invitation_accept":"Accept","chat_invitation_block":"Block","chat_invitation_ignore":"Ignore","clear_messages_warning":"Are you sure you want to clear all messages? It cannot be undone.","code_doesnot_match":"Code does not match","contacts_not_found":"You have no chats<br />¯∖_(ツ)_/¯","contacts_not_found_short":"No contacts match \'\'{query}\'\'","credential_email_prompt":"Your registration email","delete_account":"Delete account","delete_account_arning":"Are you sure you want to delete your account? It cannot be undone.","delete_messages_warning":"Are you sure you want to delete all messages for everyone? It cannot be undone.","deleted_content":"content deleted","download_action":"download","drafty_attachment":"Attachment","drafty_form":"Form:","drafty_image":"Picture","email_dative":"email","email_prompt":"Email, e.g. jdoe@example.com","enable_peers_messaging":"Enable","enter_confirmation_code_prompt":"Enter confirmation code sent to you by {method}:","error_invalid_id":"Invalid ID","file_attachment_too_large":"The file size {size} exceeds the {limit} limit.","forgot_password_link":"Forgot password?","full_name_prompt":"Full name, e.g. John Doe","granted_permissions":"Granted","group_has_no_members":"No members","group_user_id_prompt":"Group or User ID","id_device_prompt":"ID Device","image_caption_prompt":"Image caption","invalid_content":"invalid content","invalid_security_token":"Invalid security token","label_client":"Client:","label_content_type":"Content type:","label_default_access":"Default access mode:","label_default_access_mode":"Default access mode:","label_file_name":"File name:","label_group_members":"Group members:","label_incognito_mode":"Incognito mode:","label_message_sound":"Message sound:","label_muting_topic":"Muted:","label_other_user":"Other","label_password":"Password","label_permissions":"Permissions:","label_private":"Private comment","label_push_notifications":"Notification alerts:","label_push_notifications_disabled":"Notification alerts (requires HTTPS):","label_reset_password":"Send a password reset email:","label_sdk":"SDK:","label_server":"Server:","label_server_address":"Server address:","label_server_to_use":"Server to use:","label_size":"Size:","label_topic_name":"Name","label_user_contacts":"Contacts:","label_user_id":"ID:","label_wire_transport":"Wire transport:","label_you":"You:","label_your_name":"Your name","label_your_permissions":"Your permissions:","last_seen_timestamp":"Last seen","leave_chat_warning":"Are you sure you want to leave this conversation?","link_contact_us":"Contact Us","link_privacy_policy":"Privacy Policy","link_terms_of_service":"Terms of Service","login_prompt":"Login","menu_item_archive_topic":"Archive","menu_item_block":"Block","menu_item_clear_messages":"Clear messages","menu_item_clear_messages_for_all":"Clear for All","menu_item_delete":"Delete","menu_item_delete_for_all":"Delete for All","menu_item_delete_topic":"Delete","menu_item_edit_permissions":"Edit permissions","menu_item_info":"Info","menu_item_member_delete":"Remove","menu_item_mute":"Mute","menu_item_restore_topic":"Restore","menu_item_send_retry":"Retry","menu_item_unblock":"Unblock","menu_item_unmute":"Unmute","message_sending":"sending...","message_sending_failed":"failed","messages_not_readable":"no access to messages","messaging_disabled_prompt":"Messaging disabled","more_online_members":"+{overflow} more","new_message_prompt":"New message","new_password_placeholder":"Enter new password","no_connection":"No connection","no_contacts":"You have no contacts :-(","numeric_confirmation_code_prompt":"Numbers only","online_now":"online now","password_prompt":"Password","password_reset_email_sent":"An email has been sent to {email}. Follow the directions in the email to reset your password.","password_unchanged_prompt":"Unchanged","peers_messaging_disabled":"Peer\'s messaging is disabled.","permission_admin":"Approve ({val})","permission_delete":"Delete ({val})","permission_join":"Join ({val})","permission_owner":"Owner ({val})","permission_pres":"Get notified ({val})","permission_read":"Read ({val})","permission_share":"Share ({val})","permission_write":"Write ({val})","phone_dative":"phone","private_editing_placeholder":"Visible to you only","push_init_failed":"Failed to initialize push notifications","reconnect_countdown":"Disconnected. Reconnecting in {seconds}…","reconnect_now":"Try now","reload_update":"Reload","report_chat_warning":"Are you sure you want to block and report this conversation?","requested_permissions":"Requested","save_attachment":"save","search_for_contacts":"Use search to find contacts","search_no_results":"Search returned no results","search_placeholder":"List like email:alice@example.com, tel:17025550003...","sidepanel_title_acc_general":"General","sidepanel_title_acc_notifications":"Notifications","sidepanel_title_acc_security":"Security","sidepanel_title_acc_support":"Support","sidepanel_title_account_settings":"Account Settings","sidepanel_title_archive":"Archived Chats","sidepanel_title_blocked":"Blocked Chats","sidepanel_title_cred":"Confirm Credentials","sidepanel_title_login":"Sign In","sidepanel_title_newtpk":"Start New Chat","sidepanel_title_register":"Create Account","sidepanel_title_reset":"Reset Password","sidepanel_title_settings":"Settings","stay_logged_in":"Stay logged in","tabtitle_find_user":"find","tabtitle_group_by_id":"by id","tabtitle_new_group":"new group","tags_editor_no_tags":"Add some tags","tags_not_found":"No tags defined. Add some.","title_all_contacts":"All Contacts","title_group_members":"Group Members","title_info":"Info","title_manage_tags":"Manage","title_not_found":"Not found","title_permissions":"Permissions","title_tag_manager":"Tags (user discovery)","token_prompt":"Token","topic_block_warning":"Are you sure you want to block this conversation?","topic_delete":"Delete Conversation","topic_delete_warning":"Are you sure you want to delete this conversation? It cannot be undone.","topic_name_editing_placeholder":"Freeform name of the group","unnamed_topic":"Unnamed","update_available":"Update available.","upload_finishing":"finishing...","user_not_found":"Not found","validate_credential_action":"confirm"},"es":{"validate_credential_action":"confirmar","title_tag_manager":"Etiquetas (descubrimiento de usuarios)","label_user_contacts":"Contactos:","button_add_another":"Añadir contacto","label_message_sound":"Sonido de mensaje:","label_push_notifications":"Alertas de notificaciones:","label_push_notifications_disabled":"Alertas de notificaciones (requiere HTTPS):","label_incognito_mode":"Modo incógnito:","delete_account":"Eliminar cuenta","delete_account_arning":"¿Estás seguro de que deseas eliminar permanentemente tu cuenta? Esta acción es irreversible.","label_password":"Contraseña","password_unchanged_prompt":"Sin cambios","button_logout":"Cerrar sesión","button_delete_account":"Eliminar cuenta","label_default_access_mode":"Modo de acceso predeterminado:","blocked_contacts_link":"Contactos bloqueados ({count})","link_contact_us":"Contáctanos","link_terms_of_service":"Términos de uso","link_privacy_policy":"Política de privacidad","label_sdk":"SDK:","label_server_address":"Dirección del servidor:","archived_contacts":"Contactos archivados ({count})","contacts_not_found":"No tienes chats<br />¯∖_(ツ)_/¯","full_name_prompt":"Nombre completo, p.ej. Juan González Hernández","email_prompt":"Correo electrónico, p.ej. juan@example.com","button_sign_up":"Regístrate","label_your_name":"Tu nombre","label_user_id":"ID:","button_edit":"Editar","requested_permissions":"Solicitados","granted_permissions":"Otorgados","menu_item_edit_permissions":"Editar permisos","label_other_user":"Otros","action_clear_messages":"Borrar mensajes","clear_messages_warning":"¿Estás seguro de que quieres eliminar todos los mensajes? Esta acción es irreversible.","action_delete_messages":"Borrar mensajes para todos","delete_messages_warning":"¿Estás seguro de que quieres eliminar todos los mensajes para todos? Esta acción es irreversible.","action_leave_chat":"Dejar conversación","leave_chat_warning":"¿Estás seguro de que quieres dejar esta conversación?","action_block_contact":"Bloquear contacto","block_contact_warning":"¿Estás seguro de que quieres bloquear a este contacto?","action_report_chat":"Reportar conversación","report_chat_warning":"¿Estás seguro de que quieres bloquear y reportar a esta conversación?","title_info":"Información","label_topic_name":"Nombre del tema","label_private":"Comentario privado","private_editing_placeholder":"Sólo visible para tí","label_muting_topic":"Silenciado:","action_more":"Más","label_your_permissions":"Tus permisos:","label_permissions":"Permisos:","label_you":"Tú:","label_default_access":"Modo de acceso predeterminado:","label_group_members":"Miembros del grupo:","button_add_members":"Añadir miembros","group_has_no_members":"No hay miembros","login_prompt":"Nombre de usuario","password_prompt":"Contraseña","stay_logged_in":"Permanecer conectado","forgot_password_link":"¿Olvidaste tu contraseña?","button_sign_in":"Entrar","label_client":"Cliente:","label_server":"Servidor:","online_now":"en línea","last_seen_timestamp":"Últ. vez","title_not_found":"No encontrado","unnamed_topic":"Sin nombre","messages_not_readable":"sin acceso a mensajes","peers_messaging_disabled":"La mensajería Peer está deshabilitada.","enable_peers_messaging":"Habilitar","search_for_contacts":"Usa la búsqueda para encontrar contactos","search_no_results":"La búsqueda no arrojó resultados","tabtitle_find_user":"encontrar","tabtitle_new_group":"nuevo grupo","tabtitle_group_by_id":"por ID","new_password_placeholder":"Introduzca una nueva contraseña","label_reset_password":"Enviar un correo electrónico de restablecimiento de contraseña:","credential_email_prompt":"Tu correo electrónico de registro","button_reset":"Restablecer","button_send_request":"Enviar petición","label_server_to_use":"Servidor para usar:","label_wire_transport":"Transporte de alambre:","button_update":"Actualizar","sidepanel_title_login":"Iniciar sesión","sidepanel_title_register":"Crear cuenta","sidepanel_title_settings":"Ajustes","sidepanel_title_account_settings":"Ajustes de la cuenta","sidepanel_title_acc_general":"General","sidepanel_title_acc_security":"Seguridad","sidepanel_title_acc_notifications":"Notificaciones","sidepanel_title_acc_support":"Soporte","sidepanel_title_newtpk":"Iniciar un nuevo chat","sidepanel_title_cred":"Confirmar credenciales","sidepanel_title_reset":"Restablecer contraseña","sidepanel_title_archive":"Chats archivados","sidepanel_title_blocked":"Chats bloqueados","update_available":"Actualización disponible.","reload_update":"Recargar","reconnect_countdown":"Desconectado. Reconectando en {seconds}…","reconnect_now":"Reintentar","push_init_failed":"Error al inicializar las notificaciones push","invalid_security_token":"Token de seguridad inválido","no_connection":"Sin conexión","code_doesnot_match":"El código no coincide","phone_dative":"teléfono","email_dative":"correo electrónico","enter_confirmation_code_prompt":"Introduzca el código de confirmación enviado a tu {method}:","numeric_confirmation_code_prompt":"Sólo números","button_confirm":"Confirmar","save_attachment":"guardar","deleted_content":"este mensaje fue eliminado","invalid_content":"contenido inválido","user_not_found":"Usuario no encontrado","badge_you":"tú","badge_owner":"propietario","menu_item_info":"Información","menu_item_clear_messages":"Borrar mensajes","menu_item_clear_messages_for_all":"Borrar para todos","menu_item_delete":"Eliminar","menu_item_delete_for_all":"Eliminar para todos","menu_item_send_retry":"Inténtalo de nuevo","menu_item_mute":"Silenciar","menu_item_unmute":"Anular el silencio","menu_item_delete_topic":"Eliminar","topic_delete_warning":"¿Estás seguro de que quieres eliminar esta conversación?","menu_item_unblock":"Desbloquear","menu_item_block":"Bloquear","topic_block_warning":"¿Estás seguro de que quieres bloquear esta conversación","menu_item_member_delete":"Eliminar","menu_item_archive_topic":"Archivar","action_cancel":"cancelar","upload_finishing":"terminando...","no_contacts":"No tienes contactos :-(","contacts_not_found_short":"Ningún contacto coincide con \'\'{query}\'\'","title_group_members":"Miembros del grupo","title_all_contacts":"Todos los contactos","button_ok":"OK","button_cancel":"Cancelar","more_online_members":"+{overflow} más","download_action":"descargar","label_file_name":"Nombre del archivo:","label_content_type":"Tipo de contenido:","label_size":"Tamaño:","chat_invitation":"Estás invitado a participar en un nuevo chat. ¿Qué te gustaría hacer?","chat_invitation_accept":"Aceptar","chat_invitation_ignore":"Ignorar","chat_invitation_block":"Bloquear","error_invalid_id":"ID inválido","group_user_id_prompt":"ID del grupo o usuario","button_subscribe":"Suscribirse","topic_name_editing_placeholder":"Nombre del grupo","button_create":"Crear","permission_join":"Unirse ({val})","permission_read":"Leer ({val})","permission_write":"Escribir ({val})","permission_pres":"Ser notificado ({val})","permission_admin":"Approbar ({val})","permission_share":"Compartir ({val})","permission_delete":"Eliminar ({val})","permission_owner":"Propietario ({val})","title_permissions":"Permisos","message_sending":"enviando...","message_sending_failed":"no se pudo enviar el mensaje","search_placeholder":"Ej. email:alba@example.com, tel:17025550003...","messaging_disabled_prompt":"El envío de mensajes está deshabilitado","new_message_prompt":"Nuevo mensaje","image_caption_prompt":"Añade un comentario","file_attachment_too_large":"El tamaño del archivo {size} excede el límite de {limit}.","cannot_initiate_file_upload":"No se pudo iniciar la carga del archivo.","tags_not_found":"No hay etiquetas definidas. Añade unas.","tags_editor_no_tags":"Añadir etiquetas","title_manage_tags":"Gestionar","channel_prompt":"Este es un canal","channel":"canal","drafty_attachment":"Archivo","drafty_form":"Formulario:","drafty_image":"Imagen","topic_delete":"Eliminar chat","password_reset_email_sent":"Se ha enviado un correo electrónico a {email}. Siga las instrucciones del correo electrónico para restablecer su contraseña.","menu_item_restore_topic":"Restaurar"},"ko":{"validate_credential_action":"확인","title_tag_manager":"태그(사용자검색)","label_user_contacts":"연락처: ","button_add_another":"다른항목추가","label_message_sound":"메시지소리: ","label_push_notifications":"통지경보: ","label_push_notifications_disabled":"통지경보(HTTPS필요): ","label_incognito_mode":"시크릿모드: ","delete_account":"계정삭제","delete_account_arning":"계정을삭제하시겠습니까?실행취소할수없습니다.","label_password":"비밀번호","password_unchanged_prompt":"변경되지않음","button_logout":"로그아웃","button_delete_account":"계정삭제","label_default_access_mode":"기본액세스모드: ","blocked_contacts_link":"차단된연락처({수})","link_contact_us":"문의처","link_terms_of_service":"서비스약관","link_privacy_policy":"개인정보보호정책","label_sdk":"SDK:","label_server_address":"서버주소: ","archived_contacts":"보관된연락처({수})","contacts_not_found":"채팅이없습니다<br/>¯∖_(ツ)_/¯","full_name_prompt":"전체이름(예:홍길동)","email_prompt":"이메일(예:hong@example.com)","button_sign_up":"가입","label_your_name":"이름","label_user_id":"ID:","button_edit":"편집","requested_permissions":"요청","menu_item_edit_permissions":"편집권한","label_other_user":"기타","action_clear_messages":"메시지지우기","clear_messages_warning":"모든메시지를지우시겠습니까?실행취소할수없습니다.","action_delete_messages":"모든메시지지우기","delete_messages_warning":"모든사람의모든메시지를삭제하시겠습니까?실행취소할수없습니다.","action_leave_chat":"대화나누기","leave_chat_warning":"이대화를나가시겠습니까?","action_block_contact":"연락차단","block_contact_warning":"이연락처를차단하시겠습니까?","action_report_chat":"대화기록","report_chat_warning":"이대화를차단하고기록하시겠습니까?","title_info":"정보","label_topic_name":"이름","label_private":"개인코멘트","private_editing_placeholder":"나만볼수있습니다","label_muting_topic":"음소거: ","action_more":"더보기","label_your_permissions":"권한: ","label_permissions":"권한: ","label_you":"당신: ","label_default_access":"기본액세스모드: ","label_group_members":"그룹회원: ","button_add_members":"회원추가","group_has_no_members":"회원없음","login_prompt":"로그인","password_prompt":"비밀번호","stay_logged_in":"로그인상태유지","forgot_password_link":"비밀번호를잊으셨습니까?","button_sign_in":"로그인","label_client":"클라이언트: ","label_server":"서버: ","online_now":"현재접속중","last_seen_timestamp":"마지막으로본","title_not_found":"찾을수없음","unnamed_topic":"이름없는","peers_messaging_disabled":"동료의메시지가비활성화되었습니다.","enable_peers_messaging":"활성화","search_for_contacts":"검색을사용하여연락처찾기","search_no_results":"검색결과가없습니다","tabtitle_find_user":"찾기","tabtitle_new_group":"새그룹","tabtitle_group_by_id":"id로","new_password_placeholder":"새비밀번호입력","label_reset_password":"비밀번호재설정이메일보내기: ","credential_email_prompt":"등록이메일","button_reset":"재설정","button_send_request":"요청보내기","label_server_to_use":"사용할서버:","label_wire_transport":"와이어수송:","button_update":"업데이트","sidepanel_title_login":"로그인","sidepanel_title_register":"계정만들기","sidepanel_title_settings":"설정","sidepanel_title_account_settings":"계정설정","sidepanel_title_acc_general":"일반","sidepanel_title_acc_security":"보안","sidepanel_title_acc_notifications":"알림","sidepanel_title_acc_support":"지원","sidepanel_title_newtpk":"새채팅시작","sidepanel_title_cred":"자격증명확인","sidepanel_title_reset":"비밀번호재설정","sidepanel_title_archive":"보관된채팅","sidepanel_title_blocked":"차단된채팅","update_available":"업데이트가능.","reload_update":"재로드","reconnect_countdown":"연결이끊어졌습니다.다시연결하는중{초}…","reconnect_now":"지금시도","push_init_failed":"푸시알림을초기화하지못했습니다","invalid_security_token":"유효하지않은보안토큰","no_connection":"연결없음","code_doesnot_match":"코드가일치하지않습니다","phone_dative":"전화","email_dative":"이메일","enter_confirmation_code_prompt":"{방법}으로보낸확인코드를입력하십시오:","numeric_confirmation_code_prompt":"숫자만","button_confirm":"확인","save_attachment":"저장","invalid_content":"잘못된내용","user_not_found":"찾을수없음","badge_you":"당신","badge_owner":"소유자","menu_item_info":"정보","menu_item_clear_messages":"메시지지우기","menu_item_clear_messages_for_all":"모두지우기","menu_item_delete":"삭제","menu_item_delete_for_all":"모두삭제","menu_item_send_retry":"다시시도","menu_item_mute":"음소거","menu_item_unmute":"음소거해제","menu_item_delete_topic":"삭제","topic_delete_warning":"이대화를삭제하시겠습니까?","menu_item_unblock":"차단해제","menu_item_block":"차단","topic_block_warning":"이대화를차단하시겠습니까?","menu_item_member_delete":"제거","menu_item_archive_topic":"보관","action_cancel":"취소","upload_finishing":"마무리...","no_contacts":"연락처가없습니다 (._.)","contacts_not_found_short":"\'{문의}\'와일치하는연락처가없습니다.","title_group_members":"그룹구성원","title_all_contacts":"모든연락처","button_ok":"OK","button_cancel":"취소","more_online_members":"+{넘침}더보기","download_action":"다운로드","label_file_name":"파일이름: ","label_content_type":"컨텐츠유형: ","label_size":"크기: ","chat_invitation":"새로운대화를시작하도록초대되었습니다.무엇을하시겠습니까?","chat_invitation_accept":"수락","chat_invitation_ignore":"무시","chat_invitation_block":"차단","error_invalid_id":"잘못된ID","group_user_id_prompt":"그룹또는사용자ID","button_subscribe":"구독","topic_name_editing_placeholder":"그룹의자유형이름","button_create":"작성","permission_join":"참여({val})","permission_read":"읽기({val})","permission_write":"쓰기({val})","permission_pres":"알림받기({val})","permission_admin":"승인({val})","permission_share":"공유({val})","permission_delete":"삭제({val})","permission_owner":"소유자({val})","title_permissions":"권한","message_sending":"보내기...","message_sending_failed":"실패","search_placeholder":"email:kim@example.com,tel:17025550003...와같은목록","messaging_disabled_prompt":"메시지비활성화","new_message_prompt":"새메시지","image_caption_prompt":"이미지설명","file_attachment_too_large":"파일크기{크기}이(가){제한}제한을초과합니다.","cannot_initiate_file_upload":"파일업로드를시작할수없습니다.","tags_not_found":"태그가정의되지않았습니다.일부를추가하십시오.","tags_editor_no_tags":"일부태그추가","title_manage_tags":"관리","granted_permissions":"승낙하다","messages_not_readable":"메시지에 액세스 할 수 없습니다","deleted_content":"내용이 삭제되었습니다","channel_prompt":"이 채널입니다","channel":"채널","drafty_attachment":"부착","drafty_form":"형태:","drafty_image":"이미지","topic_delete":"채팅 삭제","password_reset_email_sent":"이메일이 {email}(으)로 전송되었습니다. 이메일의 지침에 따라 비밀번호를 재설정하세요.","menu_item_restore_topic":"복원"},"ro":{"validate_credential_action":"confirmă","title_tag_manager":"Tag-uri (user discovery)","label_user_contacts":"Contacte:","button_add_another":"Adaugă","label_message_sound":"Sunet de mesaj:","label_push_notifications":"Alerte de notificare:","label_push_notifications_disabled":"Alerte de notificare (necesită HTTPS):","label_incognito_mode":"Mod incognito:","delete_account":"Șterge contul","delete_account_arning":"Ești sigur că dorești să ștergi contul? Acesta nu va putea fi recuperat.","label_password":"Parola","password_unchanged_prompt":"Neschimbată","button_logout":"Deconectare","button_delete_account":"Șterge cont","label_default_access_mode":"Default access mode:","blocked_contacts_link":"Contact blocate ({count})","link_contact_us":"Contactează-ne","link_terms_of_service":"Termenii Serviciului","link_privacy_policy":"Politica de Confidențialitate","label_sdk":"SDK:","label_server_address":"Adresa serverului:","archived_contacts":"Contacte arhivate ({count})","contacts_not_found":"Nu ai contacte salvate<br />¯∖_(ツ)_/¯","full_name_prompt":"Numele tău","email_prompt":"Adresa de e-mail","button_sign_up":"Creează cont","label_your_name":"Numele tău","label_user_id":"ID:","button_edit":"Editează","requested_permissions":"Necesare","granted_permissions":"Oferite","menu_item_edit_permissions":"Editează permisiuni","label_other_user":"Altele","action_clear_messages":"Șterge mesajele","clear_messages_warning":"Ești sigur că dorești să ștergi mesajele? Acestea nu pot fi recuperate.","action_delete_messages":"Șterge toate mesajele","delete_messages_warning":"Ești sigur că dorești să șterge mesajele din toate conversațiile? Acestea nu pot fi recuperate.","action_leave_chat":"Ieși din conversație","leave_chat_warning":"Ești sigur că dorești să ieși din conersație?","action_block_contact":"Blochează contact","block_contact_warning":"Ești sigur că dorești să blochezi acest contact?","action_report_chat":"Raportează conversația","report_chat_warning":"Ești sigur că dorești să blochezi și să raportezi această conversație?","title_info":"Info","label_topic_name":"Nume","label_private":"Comentariu privat","private_editing_placeholder":"Vizibil doar ție","label_muting_topic":"Mod silențios (muted):","action_more":"Mai multe","label_your_permissions":"Permisiuniile tale:","label_permissions":"Permisiuni:","label_you":"Tu:","label_default_access":"Modul default:","label_group_members":"Membrii grupului:","button_add_members":"Adaugă persoane","group_has_no_members":"În acest grup nu se află persoane","login_prompt":"Conectează-te","password_prompt":"Parola","stay_logged_in":"Rămâi conectat","forgot_password_link":"Ți-ai uitat parola?","button_sign_in":"Conectează-te","label_client":"Client:","label_server":"Server:","online_now":"online acum","last_seen_timestamp":"Văzut ultima dată","title_not_found":"Nu a fost găsit","channel":"canal","unnamed_topic":"Nedenumit","messages_not_readable":"Mesajele nu pot fi citite","peers_messaging_disabled":"Mesageria de tip Peer este dezactivată.","enable_peers_messaging":"Activează","search_for_contacts":"Caută în contacte","search_no_results":"Nu s-au găsit rezultate","tabtitle_find_user":"caută","tabtitle_new_group":"grup nou","tabtitle_group_by_id":"după id","new_password_placeholder":"Introdu parolă","label_reset_password":"Resetează parola:","credential_email_prompt":"Adresa de e-mail","button_reset":"Resetează","button_send_request":"Trimite cerere","label_server_to_use":"Server de utilizat:","label_wire_transport":"Transportul legat:","button_update":"Actualizează","sidepanel_title_login":"Conectează-te","sidepanel_title_register":"Creează Cont","sidepanel_title_settings":"Setări","sidepanel_title_account_settings":"Setările Contului","sidepanel_title_acc_general":"Generale","sidepanel_title_acc_security":"Securitate","sidepanel_title_acc_notifications":"Notificări","sidepanel_title_acc_support":"Ajutor","sidepanel_title_newtpk":"Creeză un nou Chat","sidepanel_title_cred":"Confirmă credențiale","sidepanel_title_reset":"Resetează Parola","sidepanel_title_archive":"Conversații Arhivate","sidepanel_title_blocked":"Conversații Blocate","reconnect_countdown":"Deconectat. Se încearcă conectarea în {seconds}…","reconnect_now":"Încearcă din nou","push_init_failed":"Nu s-a reușit inițializarea tip push notifications","invalid_security_token":"Codul de securitate este invalid","no_connection":"Nu există conexiune","code_doesnot_match":"Codul furnizat nu este valid","update_available":"Actualizare disponibilă.","reload_update":"Reîncarcă","phone_dative":"telefon","email_dative":"email","enter_confirmation_code_prompt":"Introu codul de confirmare trimis pe {method}:","numeric_confirmation_code_prompt":"Doar cifre","button_confirm":"Confirmă","save_attachment":"salvează","deleted_content":"conținut șters","invalid_content":"conținut invalid","user_not_found":"Utilizatorul nu a fost găsit","badge_you":"tu","badge_owner":"owner","menu_item_info":"Info","menu_item_clear_messages":"Șterge mesajele","menu_item_clear_messages_for_all":"Ștergele pe toate","menu_item_delete":"Șterge","menu_item_delete_for_all":"Ștergele pe toate","menu_item_send_retry":"Reîncearcă","menu_item_mute":"Mute","menu_item_unmute":"Unmute","menu_item_delete_topic":"Șterge","topic_delete_warning":"Ești sigur că dorești să șterge această conversație?","menu_item_unblock":"Deblochează","menu_item_block":"Blochează","topic_block_warning":"Ești sigur că dorești să blochezi această conversație?","menu_item_member_delete":"Șterge persoană","menu_item_archive_topic":"Arhivează","action_cancel":"anulează","upload_finishing":"se încarcă...","no_contacts":"Nu ai contacte adăugate :-(","contacts_not_found_short":"Niciun contact găsit după criteriile \'\'{query}\'\'","title_group_members":"Persoanele din grup","title_all_contacts":"Toate Contactele","button_ok":"OK","button_cancel":"Anulează","more_online_members":"+{overflow} mai mult","download_action":"download","label_file_name":"Nume fișier:","label_content_type":"Tip conținut:","label_size":"Size:","chat_invitation":"Ai primit invitație într-o conversație. Accepți?","chat_invitation_accept":"Da, accept","chat_invitation_ignore":"Ignoră","chat_invitation_block":"Blochează","error_invalid_id":"ID Invalid","group_user_id_prompt":"Grup sau user ID","button_subscribe":"Subscribe","topic_name_editing_placeholder":"Numele grupului","channel_prompt":"Acesta este un canal","button_create":"Creează","permission_join":"Participare ({val})","permission_read":"Citire ({val})","permission_write":"Scriere ({val})","permission_pres":"Notificare ({val})","permission_admin":"Aprobare ({val})","permission_share":"Distribuire ({val})","permission_delete":"Ștergere ({val})","permission_owner":"Deținător ({val})","title_permissions":"Permisiuni","message_sending":"se trimite...","message_sending_failed":"eroare","search_placeholder":"Caută după e-mail sau număr telefon...","messaging_disabled_prompt":"Mesageria este dezactivată","new_message_prompt":"Mesaj nou","image_caption_prompt":"Titlul imaginii","file_attachment_too_large":"Dimensiunea fișiterului {size} depășește limita de {limit}.","cannot_initiate_file_upload":"Nu se poate face încărcarea.","tags_not_found":"Niciun tag definit. Adaugă.","tags_editor_no_tags":"Adaugă tag-uri","title_manage_tags":"Administrează","drafty_attachment":"Atasament","drafty_form":"Formă:","drafty_image":"Imagine","topic_delete":"Ștergeți Chat","password_reset_email_sent":"Un e-mail a fost trimis către {email}. Urmați instrucțiunile din e-mail pentru a vă reseta parola.","menu_item_restore_topic":"Restabili"},"ru":{"contacts_not_found":"Чатов нет<br />¯∖_(ツ)_/¯","full_name_prompt":"Полное имя, напр. Иван Петров","email_prompt":"Email, напр. ivan@example.com","button_sign_up":"Создать аккаунт","label_your_name":"Ваше имя","label_password":"Пароль","password_unchanged_prompt":"Не изменен","label_user_id":"ID:","label_default_access_mode":"Доступ по умолчанию:","label_message_sound":"Звук нового сообщения:","label_push_notifications":"Уведомления:","label_push_notifications_disabled":"Уведомления (требуют HTTPS):","title_tag_manager":"Теги для поиска","button_logout":"Выйти","login_prompt":"Логин","password_prompt":"Пароль","stay_logged_in":"Запомнить","forgot_password_link":"Напомнить пароль","button_sign_in":"Войти","label_client":"Клиент:","label_server":"Сервер:","online_now":"онлайн","last_seen_timestamp":"Был активен","title_not_found":"Не найден","unnamed_topic":"Без названия","messages_not_readable":"нет доступа к сообщениям","tabtitle_find_user":"найти","tabtitle_new_group":"создать","tabtitle_group_by_id":"по id","label_server_to_use":"Использовать сервер:","label_wire_transport":"Соединение:","button_update":"Применить","sidepanel_title_login":"Авторизация","sidepanel_title_register":"Зарегистрироваться","sidepanel_title_settings":"Настройки","sidepanel_title_account_settings":"Настройки аккаунта","sidepanel_title_newtpk":"Новый чат","sidepanel_title_cred":"Подтвердить","sidepanel_title_reset":"Сменить пароль","tags_not_found":"Тегов нет. Добавьте","tags_editor_no_tags":"Добавьте теги","title_manage_tags":"Редактировать","message_sending":"в пути...","message_sending_failed":"ошибка","search_placeholder":"Список, напр. email:alice@example.com, tel:+17025550003...","messaging_disabled_prompt":"Отправка недоступна","new_message_prompt":"Новое сообщение","file_attachment_too_large":"Размер файла {size} превышает {limit} лимит.","cannot_initiate_file_upload":"Ошибка загрузки файла.","search_for_contacts":"Поиск контактов","enter_confirmation_code_prompt":"Код подтверждения, полученный по {method}:","numeric_confirmation_code_prompt":"Только цифры","button_confirm":"Подтвердить","button_ok":"OK","button_cancel":"Отменить","invalid_content":"сообщение не читается","label_file_name":"Имя файла:","label_content_type":"Тип:","label_size":"Размер:","phone_dative":"телефону","email_dative":"емейлу","title_group_members":"Участники","download_action":"скачать","permission_join":"Подписываться ({val})","permission_read":"Читать ({val})","permission_write":"Писать ({val})","permission_pres":"Уведомлять ({val})","permission_admin":"Подтверждать ({val})","permission_share":"Приглашать ({val})","permission_delete":"Удалять ({val})","permission_owner":"Владелец ({val})","title_permissions":"Права доступа","requested_permissions":"Требуются","granted_permissions":"Получены","menu_item_edit_permissions":"Права доступа","label_other_user":"Второй","label_topic_name":"Название","label_private":"Комментарий","private_editing_placeholder":"Виден только вам","label_muting_topic":"Без уведомлений","action_more":"Ещё","label_your_permissions":"Ваши права доступа:","label_permissions":"Права доступа:","label_you":"Вы:","label_default_access":"Права по умолчанию:","label_group_members":"Участники чата:","button_add_members":"Добавить","group_has_no_members":"Нет участников","action_leave_chat":"Уйти из чата","menu_item_info":"Информация","menu_item_clear_messages":"Удалить сообщения","menu_item_clear_messages_for_all":"Удалить для всех","menu_item_delete":"Удалить","menu_item_delete_for_all":"Удалить для всех","menu_item_send_retry":"Отправить заново","menu_item_mute":"Не уведомлять","menu_item_unmute":"Уведомлять","menu_item_delete_topic":"Удалить чат","menu_item_unblock":"Разблокировать","menu_item_block":"Заблокировать","menu_item_member_delete":"Отписать","title_info":"Подробности","new_password_placeholder":"Введите новый пароль","label_reset_password":"Отправить емейл для смены пароля:","credential_email_prompt":"Регистрационный емейл","button_reset":"Изменить","button_send_request":"Отправить","action_cancel":"отменить","upload_finishing":"завершение...","no_contacts":"Ничего нет :-(","contacts_not_found_short":"Нет контактов для запроса \'\'{query}\'\'","title_all_contacts":"Все контакты","error_invalid_id":"Неверный ID","group_user_id_prompt":"ID чата или пользователя","button_subscribe":"Подписаться","topic_name_editing_placeholder":"Название чата","button_create":"Создать","badge_you":"вы","badge_owner":"влад.","update_available":"Есть новая версия приложения.","reload_update":"Обновить","user_not_found":"Не найден","reconnect_countdown":"Нет связи. Подключение через {seconds}…","reconnect_now":"Подключить сейчас.","save_attachment":"сохранить","menu_item_archive_topic":"В архив","archived_contacts":"Чаты в архиве ({count})","sidepanel_title_archive":"Архив чатов","chat_invitation":"Вас пригласили начать новый чат. Как вы хотите поступить?","chat_invitation_accept":"Принять","chat_invitation_ignore":"Игнорировать","chat_invitation_block":"Заблокировать","peers_messaging_disabled":"Чат заблокирован у корреспондента.","enable_peers_messaging":"Разблокировать.","more_online_members":"+еще {overflow}","label_user_contacts":"Конакты:","validate_credential_action":"подтвердить","link_contact_us":"Связаться с нами","link_terms_of_service":"Условия сервиса","link_privacy_policy":"Политика конфиденциальности","action_delete_messages":"Удалить сообщения","action_block_contact":"Заблокировать контакт","action_report_chat":"Сообщить о нарушении","delete_messages_warning":"Вы действительно хотите удалить все сообщения?","leave_chat_warning":"Вы действительно хотите покинуть этот чат?","block_contact_warning":"Вы действительно заблокировать этот контакт?","report_chat_warning":"Вы действительно хотите сообщить о нарушении и заблокировать этот чат?","action_clear_messages":"Удалить сообщения","clear_messages_warning":"Вы действительно хотите удалить все сообщения в чате? Их будет невозможно восстановить.","topic_delete_warning":"Вы действительно хотите удалить этот чат?","topic_block_warning":"Вы действительно хотите заблокировать этот чат?","search_no_results":"Ничего не найдено","deleted_content":"удалено","image_caption_prompt":"Подпись к фото","label_incognito_mode":"Режим инкогнито:","delete_account":"Удалить аккаунт","delete_account_arning":"Вы уверены, что ходите удалить свой аккаунт? Его невозможно будет восстановить.","button_delete_account":"Удалить аккаунт","sidepanel_title_acc_security":"Безопасность","sidepanel_title_acc_notifications":"Уведомления","sidepanel_title_acc_support":"Поддержка","label_sdk":"SDK:","label_server_address":"Адрес сервера:","button_edit":"Редактировать","button_add_another":"Добавить","sidepanel_title_acc_general":"Общие настройки","blocked_contacts_link":"Заблокированные ({count})","sidepanel_title_blocked":"Заблокированные чаты","push_init_failed":"Ошибка инициализации пуш уведомлений","invalid_security_token":"Токен некорректен","no_connection":"Нет связи","code_doesnot_match":"Код не совпадает","channel_prompt":"Создать канал","channel":"канал","drafty_attachment":"Аттачмент","drafty_form":"Форма:","drafty_image":"Картинка","topic_delete":"Удалить чат","password_reset_email_sent":"Сообщение было отправлено на адрес {email}. Следуйте инструкциям в сообщении, чтобы изменить пароль.","menu_item_restore_topic":"Восстановить"},"zh-TW":{"action_block_contact":"封鎖聯絡人","action_cancel":"取消","action_clear_messages":"清除訊息","action_delete_messages":"為所有人清除訊息","action_leave_chat":"離開對話","action_more":"更多","action_report_chat":"檢舉對話","archived_contacts":"已封存的聯絡人 ({count})","badge_owner":"擁有者","badge_you":"您","block_contact_warning":"您確定要封鎖此聯絡人嗎？","blocked_contacts_link":"已封鎖的聯絡人 ({count})","button_add_another":"新增其他人","button_add_members":"新增成員","button_cancel":"取消","button_confirm":"確認","button_create":"建立","button_delete_account":"刪除帳號","button_edit":"編輯","button_logout":"登出","button_ok":"OK","button_reset":"重設","button_send_request":"傳送要求","button_sign_in":"登入","button_sign_up":"註冊","button_subscribe":"訂閱","button_update":"更新","cannot_initiate_file_upload":"無法為檔案上傳初始化。","channel":"頻道","channel_prompt":"這是頻道","chat_invitation":"您已被邀請開始新對話。您接下來要做什麼呢？","chat_invitation_accept":"接受","chat_invitation_block":"封鎖","chat_invitation_ignore":"忽略","clear_messages_warning":"您確定要清除所有訊息嗎？此操作無法復原。","code_doesnot_match":"代碼不相符","contacts_not_found":"您沒有任何對話<br />¯∖_(ツ)_/¯","contacts_not_found_short":"沒有符合 \'\'{query}\'\' 的聯絡人","credential_email_prompt":"您的註冊電子郵件地址","delete_account":"刪除帳號","delete_account_arning":"您確定要刪除您的帳號嗎？此操作無法復原。","delete_messages_warning":"您確定要為所有人刪除所有訊息嗎？此操作無法復原。","deleted_content":"內容已被刪除","download_action":"下載","drafty_attachment":"附加檔案","drafty_form":"表單：","drafty_image":"圖片","email_dative":"電子郵件地址","email_prompt":"電子郵件地址，例如：jdoe@example.com","enable_peers_messaging":"啟用","enter_confirmation_code_prompt":"輸入透過 {method} 傳送給您的確認碼：","error_invalid_id":"ID 無效","file_attachment_too_large":"檔案大小 {size} 超出 {limit} 限制。","forgot_password_link":"忘記密碼？","full_name_prompt":"全名，例如：王小明","granted_permissions":"已授權","group_has_no_members":"無成員","group_user_id_prompt":"群組或使用者 ID","image_caption_prompt":"圖片說明","invalid_content":"內容無效","invalid_security_token":"安全權杖無效","label_client":"客戶端：","label_content_type":"類型：","label_default_access":"預設存取模式：","label_default_access_mode":"預設存取模式：","label_file_name":"檔名：","label_group_members":"群組成員：","label_incognito_mode":"無痕模式：","label_message_sound":"訊息提示聲：","label_muting_topic":"靜音：","label_other_user":"其他","label_password":"密碼","label_permissions":"權限：","label_private":"私人留言","label_push_notifications":"通知：","label_push_notifications_disabled":"通知 (需要 HTTPS)：","label_reset_password":"傳送重設密碼郵件：","label_sdk":"SDK：","label_server":"伺服器：","label_server_address":"伺服器位址：","label_server_to_use":"使用的伺服器：","label_size":"大小：","label_topic_name":"名稱","label_user_contacts":"聯絡人：","label_user_id":"ID：","label_wire_transport":"Wire transport：","label_you":"您：","label_your_name":"您的名字","label_your_permissions":"您的權限：","last_seen_timestamp":"最後上線","leave_chat_warning":"您確定要離開此對話嗎？","link_contact_us":"聯絡我們","link_privacy_policy":"隱私權政策","link_terms_of_service":"服務條款","login_prompt":"登入","menu_item_archive_topic":"封存","menu_item_block":"封鎖","menu_item_clear_messages":"清除訊息","menu_item_clear_messages_for_all":"為所有人清除訊息","menu_item_delete":"刪除","menu_item_delete_for_all":"為所有人刪除","menu_item_delete_topic":"刪除","menu_item_edit_permissions":"編輯權限","menu_item_info":"Info","menu_item_member_delete":"移除","menu_item_mute":"靜音","menu_item_send_retry":"重試","menu_item_unblock":"解除封鎖","menu_item_unmute":"解除靜音","message_sending":"正在傳送...","message_sending_failed":"失敗","messages_not_readable":"沒有存取訊息的權限","messaging_disabled_prompt":"停用訊息","more_online_members":"+{overflow}","new_message_prompt":"新訊息","new_password_placeholder":"輸入新的密碼","no_connection":"無連線","no_contacts":"您沒有任何聯絡人 :-(","numeric_confirmation_code_prompt":"僅數字","online_now":"上線中","password_prompt":"密碼","password_unchanged_prompt":"未修改","peers_messaging_disabled":"Peer 已停用訊息。","permission_admin":"核可 ({val})","permission_delete":"刪除 ({val})","permission_join":"加入 ({val})","permission_owner":"擁有者 ({val})","permission_pres":"收到通知 ({val})","permission_read":"讀取 ({val})","permission_share":"分享 ({val})","permission_write":"撰寫 ({val})","phone_dative":"phone","private_editing_placeholder":"僅您可見","push_init_failed":"初始化通知失敗。","reconnect_countdown":"已斷線。將在 {seconds} 秒後重新連線…","reconnect_now":"現在重試","reload_update":"重新載入","report_chat_warning":"您確定要封鎖並檢舉此對話嗎？","requested_permissions":"重新請求","save_attachment":"儲存","search_for_contacts":"使用搜尋來尋找聯絡人","search_no_results":"搜尋無結果","search_placeholder":"例如 email:alice@example.com, tel:17025550003... 的清單","sidepanel_title_acc_general":"一般","sidepanel_title_acc_notifications":"通知","sidepanel_title_acc_security":"安全性","sidepanel_title_acc_support":"支援","sidepanel_title_account_settings":"帳號設定","sidepanel_title_archive":"已封存的對話","sidepanel_title_blocked":"已封鎖的對話","sidepanel_title_cred":"確認認證","sidepanel_title_login":"登入","sidepanel_title_newtpk":"開始新對話","sidepanel_title_register":"建立帳號","sidepanel_title_reset":"重設密碼","sidepanel_title_settings":"設定","stay_logged_in":"保持登入","tabtitle_find_user":"尋找","tabtitle_group_by_id":"以 id","tabtitle_new_group":"新群組","tags_editor_no_tags":"新增一些標籤","tags_not_found":"未定義任何標籤。請新增一些標籤。","title_all_contacts":"所有聯絡人","title_group_members":"群組成員","title_info":"資訊","title_manage_tags":"管理","title_not_found":"找不到","title_permissions":"權限","title_tag_manager":"標籤 (使用者探索)","topic_block_warning":"您確定要封鎖此對話嗎？","topic_delete_warning":"您確定要刪除此對話嗎？","topic_name_editing_placeholder":"群組的任意名稱","unnamed_topic":"未命名","update_available":"有可用的更新。","upload_finishing":"正在完成...","user_not_found":"找不到","validate_credential_action":"確認","topic_delete":"刪除聊天","password_reset_email_sent":"一封電子郵件已發送至 {email}。按照電子郵件中的說明重置密碼。","menu_item_restore_topic":"恢復"},"zh":{"archived_contacts":"已归档联系人 ({count})","contacts_not_found":"你尚无会话<br />¯∖_(ツ)_/¯","full_name_prompt":"全名，例如张伟","email_prompt":"电子邮件，例如 zhang@example.com","button_sign_up":"注册","label_your_name":"你的姓名","label_password":"密码","password_unchanged_prompt":"未改变","label_user_id":"地址：","label_default_access_mode":"蓦然访问模式：","label_message_sound":"消息提示音：","label_push_notifications":"通知提醒：","label_push_notifications_disabled":"通知提醒（需要 HTTPS）：","title_tag_manager":"标签（用户发现）","button_logout":"登出","requested_permissions":"已请求","granted_permissions":"已授予","menu_item_edit_permissions":"编辑权限","label_other_user":"其他","title_info":"信息","label_topic_name":"名称","label_private":"私人评论","private_editing_placeholder":"仅自己可见","label_muting_topic":"已静音：","action_more":"更多","label_your_permissions":"你的权限：","label_permissions":"权限：","label_you":"你：","label_default_access":"默认权限模式：","label_group_members":"群组成员：","button_add_members":"添加成员","group_has_no_members":"无成员","action_leave_chat":"离开","login_prompt":"登录","password_prompt":"密码","stay_logged_in":"保持登录","forgot_password_link":"忘记密码？","button_sign_in":"登录","label_client":"客户端：","label_server":"服务器：","online_now":"在线","last_seen_timestamp":"最后可见","title_not_found":"无法找到","unnamed_topic":"未命名","messages_not_readable":"无消息访问权限","peers_messaging_disabled":"成员间消息已禁用。","enable_peers_messaging":"启用","tabtitle_find_user":"搜索","tabtitle_new_group":"新群组","tabtitle_group_by_id":"通过 id","search_for_contacts":"使用搜索寻找联系人","new_password_placeholder":"输入新密码","label_reset_password":"发送密码重置邮件：","credential_email_prompt":"你的注册邮箱","button_reset":"重置","button_send_request":"发送请求","label_server_to_use":"使用的服务器：","label_wire_transport":"线路传输：","button_update":"更新","sidepanel_title_login":"登录","sidepanel_title_register":"创建账户","sidepanel_title_settings":"设置","sidepanel_title_account_settings":"帐号设定","sidepanel_title_newtpk":"开始新会话","sidepanel_title_cred":"确认凭据","sidepanel_title_reset":"重置密码","sidepanel_title_archive":"已存档会话","update_available":"更新可用。","reload_update":"重新载入","reconnect_countdown":"连接已断开。{seconds} 秒后重新连接…","reconnect_now":"立即尝试","phone_dative":"电话","email_dative":"电子邮件","enter_confirmation_code_prompt":"输入通过{method}发送的验证码：","numeric_confirmation_code_prompt":"仅数字","button_confirm":"确认","save_attachment":"保存","invalid_content":"无效内容","user_not_found":"未找到","badge_you":"你","badge_owner":"所有者","menu_item_info":"信息","menu_item_clear_messages":"清空消息","menu_item_clear_messages_for_all":"全部清除","menu_item_delete":"删除","menu_item_delete_for_all":"全部删除","menu_item_mute":"静音","menu_item_unmute":"取消静音","menu_item_delete_topic":"删除","menu_item_unblock":"取消屏蔽","menu_item_block":"屏蔽","menu_item_member_delete":"移除","menu_item_archive_topic":"归档","action_cancel":"取消","upload_finishing":"正在结束...","no_contacts":"你尚无联系人 (._.)","contacts_not_found_short":"无联系人匹配\'\'{query}\'\'","title_group_members":"群组成员","title_all_contacts":"全部联系人","button_ok":"好","button_cancel":"取消","download_action":"下载","label_file_name":"文件名：","label_content_type":"内容类型：","label_size":"大小：","chat_invitation":"你受邀开始新会话。你想怎么做？","chat_invitation_accept":"接受","chat_invitation_ignore":"忽略","chat_invitation_block":"屏蔽","error_invalid_id":"无效 ID","group_user_id_prompt":"群组或用户 ID","button_subscribe":"订阅","topic_name_editing_placeholder":"群组自由格式名称","button_create":"创建","permission_join":"加入 ({val})","permission_read":"读取 ({val})","permission_write":"写入 ({val})","permission_pres":"获取通知 ({val})","permission_admin":"批准 ({val})","permission_share":"分享 ({val})","permission_delete":"删除 ({val})","permission_owner":"所有者 ({val})","title_permissions":"权限","message_sending":"正在发送...","message_sending_failed":"发送失败","search_placeholder":"列表如 email:alice@example.com, tel:+17025550003...","messaging_disabled_prompt":"消息已禁用","new_message_prompt":"新消息","file_attachment_too_large":"文件大小 {size} 超过 {limit} 限制。","cannot_initiate_file_upload":"无法初始化文件上传。","tags_not_found":"尚未定义标签。添加一些。","tags_editor_no_tags":"添加一些标签","title_manage_tags":"管理标签","more_online_members":"还有{overflow}个","label_user_contacts":"往来：","validate_credential_action":"确认","link_contact_us":"联系我们","link_terms_of_service":"条款和条件","link_privacy_policy":"隐私政策","action_delete_messages":"删除所有帖子","action_block_contact":"屏蔽联系人","delete_messages_warning":"您确定要删除所有消息吗？无法撤消。","leave_chat_warning":"您确定要退出此对话吗？","block_contact_warning":"您确定要阻止此联系人吗？","action_report_chat":"检举垃圾邮件","report_chat_warning":"您确定要停止并报告此对话吗？","action_clear_messages":"删除讯息","clear_messages_warning":"您确定要清除所有消息吗？无法撤消。","topic_delete_warning":"您确定要删除此对话吗？","topic_block_warning":"您确定要阻止此对话吗？","search_no_results":"搜索返回任何结果","deleted_content":"内容已删除","image_caption_prompt":"图片标题","menu_item_send_retry":"重试","label_incognito_mode":"无痕模式：","delete_account":"删除帐户","delete_account_arning":"您确定要删除您的帐户吗？无法撤消。","button_delete_account":"删除帐户","sidepanel_title_acc_security":"安全","sidepanel_title_acc_notifications":"通知","sidepanel_title_acc_support":"支持","label_sdk":"开发包：","label_server_address":"服务器地址：","button_edit":"编辑","button_add_another":"加上另一个","sidepanel_title_acc_general":"常用设定","blocked_contacts_link":"封锁的联络人 ({count})","sidepanel_title_blocked":"被阻止的聊天","push_init_failed":"初始化推送通知失败","invalid_security_token":"无效的安全令牌","no_connection":"无连接","code_doesnot_match":"代码不匹配","channel_prompt":"这是一个频道","channel":"频道","drafty_attachment":"附件","drafty_form":"形式：","drafty_image":"图像","topic_delete":"删除聊天","password_reset_email_sent":"一封电子邮件已发送至 {email}。按照电子邮件中的说明重置密码。","menu_item_restore_topic":"从存档中恢复"}}'
        ),
        c = firebase,
        d = (firebase.messaging, Tinode);
      var h = s.n(d);
      class p extends n().PureComponent {
        render() {
          return this.props.visible
            ? n().createElement(
                "div",
                { className: "alert-container" },
                n().createElement(
                  "div",
                  { className: "alert" },
                  n().createElement(
                    "div",
                    { className: "title" },
                    this.props.title
                  ),
                  n().createElement(
                    "div",
                    { className: "content" },
                    this.props.content
                  ),
                  n().createElement(
                    "div",
                    { className: "dialog-buttons" },
                    this.props.onReject
                      ? n().createElement(
                          "button",
                          {
                            className: "outline",
                            onClick: this.props.onReject,
                          },
                          this.props.reject ||
                            n().createElement(l.FormattedMessage, {
                              id: "button_cancel",
                              defaultMessage: [{ type: 0, value: "Cancel" }],
                            })
                        )
                      : null,
                    n().createElement(
                      "button",
                      { className: "primary", onClick: this.props.onConfirm },
                      this.props.confirm ||
                        n().createElement(l.FormattedMessage, {
                          id: "button_ok",
                          defaultMessage: [{ type: 0, value: "OK" }],
                        })
                    )
                  )
                )
              )
            : null;
        }
      }
      const m = "0.17.10",
        u = "TinodeWeb/0.17.10",
        _ = { hosted: "web.tinode.co", local: "localhost:6060" },
        g = _.hosted,
        b = 3e3,
        v = "JRWPS",
        f = 13,
        E = 128,
        w = 262144,
        C = 1 << 23,
        y = 1024,
        S = 60,
        M = (0, l.defineMessages)({
          info: {
            id: "menu_item_info",
            defaultMessage: [{ type: 0, value: "Info" }],
          },
          clear_messages: {
            id: "menu_item_clear_messages",
            defaultMessage: [{ type: 0, value: "Clear messages" }],
          },
          clear_for_all: {
            id: "menu_item_clear_messages_for_all",
            defaultMessage: [{ type: 0, value: "Clear for All" }],
          },
          delete: {
            id: "menu_item_delete",
            defaultMessage: [{ type: 0, value: "Delete" }],
          },
          delete_for_all: {
            id: "menu_item_delete_for_all",
            defaultMessage: [{ type: 0, value: "Delete for All" }],
          },
          send_retry: {
            id: "menu_item_send_retry",
            defaultMessage: [{ type: 0, value: "Retry" }],
          },
          mute: {
            id: "menu_item_mute",
            defaultMessage: [{ type: 0, value: "Mute" }],
          },
          unmute: {
            id: "menu_item_unmute",
            defaultMessage: [{ type: 0, value: "Unmute" }],
          },
          topic_delete: {
            id: "menu_item_delete_topic",
            defaultMessage: [{ type: 0, value: "Delete" }],
          },
          topic_delete_warning: {
            id: "topic_delete_warning",
            defaultMessage: [
              {
                type: 0,
                value:
                  "Are you sure you want to delete this conversation? It cannot be undone.",
              },
            ],
          },
          delete_messages_warning: {
            id: "delete_messages_warning",
            defaultMessage: [
              {
                type: 0,
                value:
                  "Are you sure you want to delete all messages for everyone? It cannot be undone.",
              },
            ],
          },
          unblock: {
            id: "menu_item_unblock",
            defaultMessage: [{ type: 0, value: "Unblock" }],
          },
          block: {
            id: "menu_item_block",
            defaultMessage: [{ type: 0, value: "Block" }],
          },
          topic_block_warning: {
            id: "topic_block_warning",
            defaultMessage: [
              {
                type: 0,
                value: "Are you sure you want to block this conversation?",
              },
            ],
          },
          member_delete: {
            id: "menu_item_member_delete",
            defaultMessage: [{ type: 0, value: "Remove" }],
          },
          archive: {
            id: "menu_item_archive_topic",
            defaultMessage: [{ type: 0, value: "Archive" }],
          },
          unarchive: {
            id: "menu_item_restore_topic",
            defaultMessage: [{ type: 0, value: "Restore" }],
          },
          edit_permissions: {
            id: "menu_item_edit_permissions",
            defaultMessage: [{ type: 0, value: "Edit permissions" }],
          },
          clear_messages_warning: {
            id: "clear_messages_warning",
            defaultMessage: [
              {
                type: 0,
                value:
                  "Are you sure you want to clear all messages? It cannot be undone.",
              },
            ],
          },
        });
      class k extends n().Component {
        constructor(e) {
          super(e);
          const { formatMessage: t } = e.intl;
          (this.handlePageClick = this.handlePageClick.bind(this)),
            (this.handleEscapeKey = this.handleEscapeKey.bind(this)),
            (this.handleClick = this.handleClick.bind(this)),
            (this.MenuItems = {
              topic_info: { id: "topic_info", title: t(M.info), handler: null },
              messages_clear: {
                id: "messages_clear",
                title: t(M.clear_messages),
                handler: (s, a) =>
                  e.onShowAlert(
                    t(M.clear_messages),
                    t(M.clear_messages_warning),
                    () => {
                      this.deleteMessages(!0, !1, s, a);
                    },
                    null,
                    !0,
                    null
                  ),
              },
              messages_clear_hard: {
                id: "messages_clear_hard",
                title: t(M.clear_for_all),
                handler: (s, a) =>
                  e.onShowAlert(
                    t(M.clear_for_all),
                    t(message.delete_messages_warning),
                    () => this.deleteMessages(!0, !0, s, a),
                    null,
                    !0,
                    null
                  ),
              },
              message_delete: {
                id: "message_delete",
                title: t(M.delete),
                handler: (e, t) => this.deleteMessages(!1, !1, e, t),
              },
              message_delete_hard: {
                id: "message_delete_hard",
                title: t(M.delete_for_all),
                handler: (e, t) => this.deleteMessages(!1, !0, e, t),
              },
              menu_item_send_retry: {
                id: "menu_item_send_retry",
                title: t(M.send_retry),
                handler: (e, t) => this.retryMessage(e, t),
              },
              topic_unmute: {
                id: "topic_unmute",
                title: t(M.unmute),
                handler: this.topicPermissionSetter.bind(this, "+P"),
              },
              topic_mute: {
                id: "topic_mute",
                title: t(M.mute),
                handler: this.topicPermissionSetter.bind(this, "-P"),
              },
              topic_unblock: {
                id: "topic_unblock",
                title: t(M.unblock),
                handler: this.topicPermissionSetter.bind(this, "+JP"),
              },
              topic_block: {
                id: "topic_block",
                title: t(M.block),
                handler: (s, a) =>
                  e.onShowAlert(
                    t(M.block),
                    t(M.topic_block_warning),
                    () =>
                      this.topicPermissionSetter("-JP", s, a).then(
                        (e) => (this.props.onTopicRemoved(s.topicName), e)
                      ),
                    null,
                    !0,
                    null
                  ),
              },
              topic_delete: {
                id: "topic_delete",
                title: t(M.topic_delete),
                handler: (s, a) =>
                  e.onShowAlert(
                    t(M.topic_delete),
                    t(M.topic_delete_warning),
                    () => {
                      const e = this.props.tinode.getTopic(s.topicName);
                      if (e)
                        return e.delTopic(!0).catch((e) => {
                          a && a(e.message, "err");
                        });
                      console.log("Topic not found: ", s.topicName);
                    },
                    null,
                    !0,
                    null
                  ),
              },
              topic_archive: {
                id: "topic_archive",
                title: t(M.archive),
                handler: (e, t) => {
                  const s = this.props.tinode.getTopic(e.topicName);
                  if (s)
                    return s.archive(!0).catch((e) => {
                      t && t(e.message, "err");
                    });
                  console.log("Topic not found: ", e.topicName);
                },
              },
              topic_restore: {
                id: "topic_restore",
                title: t(M.unarchive),
                handler: (e, t) => {
                  const s = this.props.tinode.getTopic(e.topicName);
                  if (s)
                    return s.archive(!1).catch((e) => {
                      t && t(e.message, "err");
                    });
                  console.log("Topic not found: ", e.topicName);
                },
              },
              permissions: {
                id: "permissions",
                title: t(M.edit_permissions),
                handler: null,
              },
              member_delete: {
                id: "member_delete",
                title: t(M.member_delete),
                handler: (e, t) => {
                  const s = this.props.tinode.getTopic(e.topicName);
                  if (s && e.user)
                    return s.delSubscription(e.user).catch((e) => {
                      t && t(e.message, "err");
                    });
                  console.log(
                    "Topic or user not found: '" +
                      e.topicName +
                      "', '" +
                      e.user +
                      "'"
                  );
                },
              },
              member_mute: {
                id: "member_mute",
                title: t(M.mute),
                handler: this.topicPermissionSetter.bind(this, "-P"),
              },
              member_unmute: {
                id: "member_unmute",
                title: t(M.unmute),
                handler: this.topicPermissionSetter.bind(this, "+P"),
              },
              member_block: {
                id: "member_block",
                title: t(M.block),
                handler: this.topicPermissionSetter.bind(this, "-JP"),
              },
              member_unblock: {
                id: "member_unblock",
                title: t(M.unblock),
                handler: this.topicPermissionSetter.bind(this, "+JP"),
              },
            });
        }
        componentDidMount() {
          document.addEventListener("mousedown", this.handlePageClick, !1),
            document.addEventListener("keyup", this.handleEscapeKey, !1);
        }
        componentWillUnmount() {
          document.removeEventListener("mousedown", this.handlePageClick, !1),
            document.removeEventListener("keyup", this.handleEscapeKey, !1);
        }
        handlePageClick(e) {
          o().findDOMNode(this).contains(e.target) ||
            (e.preventDefault(), e.stopPropagation(), this.props.hide());
        }
        handleEscapeKey(e) {
          27 === e.keyCode && this.props.hide();
        }
        handleClick(e) {
          e.preventDefault(), e.stopPropagation(), this.props.hide();
          let t = this.props.items[e.currentTarget.dataset.id];
          "string" == typeof t && (t = this.MenuItems[t]),
            t
              ? this.props.onAction(
                  t.id,
                  t.handler(this.props.params, this.props.onError),
                  this.props.params
                )
              : console.log("Invalid menu item ID", e.currentTarget.dataset.id);
        }
        deleteMessages(e, t, s, a) {
          const n = this.props.tinode.getTopic(s.topicName);
          if (!n) return void console.log("Topic not found: ", s.topicName);
          if (!e && n.cancelSend(s.seq)) return;
          return (
            e ? n.delMessagesAll(t) : n.delMessagesList([s.seq], t)
          ).catch((e) => {
            a && a(e.message, "err");
          });
        }
        retryMessage(e, t) {
          const s = this.props.tinode.getTopic(e.topicName);
          if (!s || !s.flushMessage(e.seq)) return;
          const a = s.createMessage(e.content, !1);
          return s.publishDraft(a).catch((e) => {
            t && t(e.message, "err");
          });
        }
        topicPermissionSetter(e, t, s) {
          const a = this.props.tinode.getTopic(t.topicName);
          if (!a) return void console.log("Topic not found", t.topicName);
          let n = a.updateMode(t.user, e);
          return (
            s &&
              (n = n.catch((e) => {
                s(e.message, "err");
              })),
            n
          );
        }
        render() {
          let e = 0,
            t = [];
          this.props.items.map((s) => {
            "string" == typeof s && (s = this.MenuItems[s]),
              s &&
                s.title &&
                t.push(
                  "-" == s.title
                    ? n().createElement("li", {
                        className: "separator",
                        key: e,
                      })
                    : n().createElement(
                        "li",
                        { onClick: this.handleClick, "data-id": e, key: e },
                        s.title
                      )
                ),
              e++;
          });
          const s = f * (0.7 + 2.5 * t.length),
            a = {
              left:
                (this.props.bounds.right - this.props.clickAt.x < 156
                  ? this.props.clickAt.x - this.props.bounds.left - 156
                  : this.props.clickAt.x - this.props.bounds.left) + "px",
              top:
                (this.props.bounds.bottom - this.props.clickAt.y < s
                  ? this.props.clickAt.y - this.props.bounds.top - s
                  : this.props.clickAt.y - this.props.bounds.top) + "px",
            };
          return n().createElement("ul", { className: "menu", style: a }, t);
        }
      }
      const T = (0, l.injectIntl)(k);
      function N(e, t) {
        t = t || window.navigator.userLanguage || window.navigator.language;
        const s = new Date();
        return e.getFullYear() == s.getFullYear()
          ? e.getMonth() == s.getMonth() && e.getDate() == s.getDate()
            ? e.toLocaleTimeString(t, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
              })
            : e.toLocaleDateString(t, {
                hour12: !1,
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })
          : e.toLocaleDateString(t, {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
      }
      function A(e) {
        if (!e || 0 == e) return "0 Bytes";
        const t = ["Bytes", "KB", "MB", "GB", "TB", "PB"],
          s = Math.min(0 | Math.floor(Math.log2(e) / 10), t.length - 1),
          a = e / Math.pow(1024, s),
          n = s > 0 ? (a < 3 ? 2 : a < 30 ? 1 : 0) : 0;
        return a.toFixed(n) + " " + t[s];
      }
      class P extends n().PureComponent {
        render() {
          let e;
          if (!0 === this.props.avatar) {
            const t = "grp" == h().topicType(this.props.topic),
              s =
                (t ? "light-color" : "dark-color") +
                (Math.abs(
                  (function (e) {
                    let t = 0;
                    e = "" + e;
                    for (let s = 0; s < e.length; s++)
                      (t = (t << 5) - t + e.charCodeAt(s)), (t &= t);
                    return t;
                  })(this.props.topic)
                ) %
                  16);
            if (
              this.props.topic &&
              this.props.title &&
              this.props.title.trim()
            ) {
              const t = this.props.title.trim().charAt(0),
                a = "lettertile " + s;
              e = n().createElement(
                "div",
                { className: a },
                n().createElement("div", null, t)
              );
            } else {
              const a = "material-icons " + s;
              e = t
                ? n().createElement("i", { className: a }, "group")
                : n().createElement("i", { className: a }, "person");
            }
          } else
            e = this.props.avatar
              ? n().createElement("img", {
                  className: "avatar",
                  alt: "avatar",
                  src: this.props.avatar,
                  onError: (e) => {
                    (e.target.onerror = null),
                      (e.target.src = "/img/broken_image.png");
                  },
                })
              : null;
          return e;
        }
      }
      const D = [
          "image/jpeg",
          "image/gif",
          "image/png",
          "image/svg",
          "image/svg+xml",
        ],
        F = ["jpg", "gif", "png", "svg", "svg"];
      function I(e) {
        if (e) {
          if (e.data && e.type) {
            return (
              "data:" +
              (e.type.startsWith("image/") ? e.type : "image/" + e.type) +
              ";base64," +
              e.data
            );
          }
          return e.ref;
        }
        return null;
      }
      function U(e, t, s, a, n) {
        if (
          ((t |= 0),
          (s |= 0),
          (a |= 0),
          (e |= 0) <= 0 || t <= 0 || s <= 0 || a <= 0)
        )
          return null;
        n && (s = a = Math.min(s, a));
        const i = Math.min(Math.min(e, s) / e, Math.min(t, a) / t),
          o = { dstWidth: (e * i) | 0, dstHeight: (t * i) | 0 };
        return (
          n
            ? ((o.dstWidth = o.dstHeight = Math.min(o.dstWidth, o.dstHeight)),
              (o.srcWidth = o.srcHeight = Math.min(e, t)),
              (o.xoffset = ((e - o.srcWidth) / 2) | 0),
              (o.yoffset = ((t - o.srcWidth) / 2) | 0))
            : ((o.xoffset = o.yoffset = 0),
              (o.srcWidth = e),
              (o.srcHeight = t)),
          o
        );
      }
      function x(e, t, s, a, n, i, o) {
        const l = new Image();
        (l.crossOrigin = "Anonymous"),
          (l.onerror = function (e) {
            o("Image format unrecognized");
          }),
          (l.onload = async function () {
            URL.revokeObjectURL(l.src);
            const r = U(this.width, this.height, t, s, n);
            if (!r) return void o("Invalid image");
            let c = document.createElement("canvas");
            (c.width = r.dstWidth), (c.height = r.dstHeight);
            let d = c.getContext("2d");
            (d.imageSmoothingEnabled = !0),
              d.drawImage(
                this,
                r.xoffset,
                r.yoffset,
                r.srcWidth,
                r.srcHeight,
                0,
                0,
                r.dstWidth,
                r.dstHeight
              );
            const h = D.includes(e.type) ? e.type : "image/jpeg";
            let p = await new Promise((e) => c.toBlob(e, h));
            if (p) {
              for (; a > 0 && p.length > a; )
                (r.dstWidth = (0.70710678118 * r.dstWidth) | 0),
                  (r.dstHeight = (0.70710678118 * r.dstHeight) | 0),
                  (c.width = r.dstWidth),
                  (c.height = r.dstHeight),
                  (d = c.getContext("2d")),
                  d.clearRect(0, 0, c.width, c.height),
                  d.drawImage(
                    this,
                    r.xoffset,
                    r.yoffset,
                    r.srcWidth,
                    r.srcHeight,
                    0,
                    0,
                    r.dstWidth,
                    r.dstHeight
                  ),
                  (p = await new Promise((e) => c.toBlob(e, h)));
              (c = null),
                i(
                  h,
                  p,
                  r.dstWidth,
                  r.dstHeight,
                  (function (e, t) {
                    const s = D.indexOf(t);
                    if (s < 0 || !e) return e;
                    const a = F[s],
                      n = e.lastIndexOf(".");
                    return n >= 0 && (e = e.substring(0, n)), e + "." + a;
                  })(e.name, h)
                );
            } else o("Unsupported image format");
          }),
          (l.src = URL.createObjectURL(e));
      }
      function R(e, t) {
        const s = new FileReader();
        s.addEventListener("load", function () {
          t(e.type, s.result.split(",")[1], e.name);
        }),
          s.readAsDataURL(e);
      }
      function L(e, t) {
        const s = new FileReader();
        s.addEventListener("load", function () {
          t(e.type, s.result.split(",")[1]);
        }),
          s.readAsDataURL(e);
      }
      class q extends n().Component {
        constructor(e) {
          super(e),
            (this.state = { dataUrl: e.avatar }),
            (this.handleFileUpload = this.handleFileUpload.bind(this));
        }
        componentDidUpdate(e) {
          this.props.avatar != e.avatar &&
            this.setState({ dataUrl: this.props.avatar });
        }
        handleFileUpload(e) {
          x(
            e.target.files[0],
            E,
            E,
            C,
            !0,
            (e, t) => {
              L(t, (t, s) => {
                const a = I({ data: s, type: e });
                this.setState({ dataUrl: a }), this.props.onImageChanged(a);
              });
            },
            (e) => {
              this.props.onError(e, "err");
            }
          ),
            (e.target.value = "");
        }
        render() {
          const e = "file-input-avatar-" + (Math.random() + "").substr(2),
            t = "avatar-upload" + (this.props.readOnly ? " read-only" : "");
          return n().createElement(
            "div",
            { className: t },
            this.props.readOnly || !this.state.dataUrl
              ? null
              : n().createElement(
                  "a",
                  {
                    href: "#",
                    className: "clear-avatar",
                    onClick: (e) => {
                      e.preventDefault(), this.props.onImageChanged(null);
                    },
                  },
                  n().createElement(
                    "i",
                    { className: "material-icons" },
                    "clear"
                  )
                ),
            this.state.dataUrl
              ? n().createElement("img", {
                  src: this.state.dataUrl,
                  className: "preview",
                })
              : this.props.readOnly && this.props.uid
              ? n().createElement(
                  "div",
                  { className: "avatar-box" },
                  n().createElement(P, {
                    avatar: !0,
                    topic: this.props.uid,
                    title: this.props.title,
                  })
                )
              : n().createElement("div", { className: "blank" }, E, "×", E),
            this.props.readOnly
              ? null
              : n().createElement("input", {
                  type: "file",
                  id: e,
                  className: "inputfile hidden",
                  accept: "image/*",
                  onChange: this.handleFileUpload,
                }),
            this.props.readOnly
              ? null
              : n().createElement(
                  "label",
                  { htmlFor: e, className: "round" },
                  n().createElement(
                    "i",
                    { className: "material-icons" },
                    "file_upload"
                  )
                )
          );
        }
      }
      class z extends n().PureComponent {
        constructor(e) {
          super(e), (this.handleChange = this.handleChange.bind(this));
        }
        handleChange() {
          this.props.onChange(this.props.name, !this.props.checked);
        }
        render() {
          return this.props.onChange
            ? this.props.checked
              ? n().createElement(
                  "i",
                  {
                    className: "material-icons blue clickable",
                    onClick: this.handleChange,
                  },
                  "check_box"
                )
              : n().createElement(
                  "i",
                  {
                    className: "material-icons blue clickable",
                    onClick: this.handleChange,
                  },
                  "check_box_outline_blank"
                )
            : this.props.checked
            ? n().createElement(
                "i",
                { className: "material-icons" },
                "check_box"
              )
            : n().createElement(
                "i",
                { className: "material-icons" },
                "check_box_outline_blank"
              );
        }
      }
      const B = { muted: "notifications_off", banned: "block" };
      class O extends n().PureComponent {
        render() {
          let e = null;
          return this.props.badges && this.props.badges.length > 0
            ? ((e = []),
              this.props.badges.map(function (t) {
                if (t.icon)
                  e.push(
                    n().createElement(
                      "i",
                      {
                        className: "material-icons as-badge",
                        key: t.key || t.icon,
                      },
                      B[t.icon]
                    )
                  );
                else {
                  const s = "badge" + (t.color ? " " + t.color : "");
                  e.push(
                    n().createElement(
                      "span",
                      { className: s, key: t.key || t.name },
                      t.name
                    )
                  );
                }
              }),
              n().createElement(n().Fragment, null, e))
            : null;
        }
      }
      function j(e) {
        const t = document.getElementById("shortcut-icon"),
          s = document.head || document.getElementsByTagName("head")[0],
          a = document.createElement("link");
        (a.type = "image/png"),
          (a.id = "shortcut-icon"),
          (a.rel = "shortcut icon"),
          (a.href = "img/logo32x32" + (e > 0 ? "a" : "") + ".png"),
          t && s.removeChild(t),
          s.appendChild(a),
          (document.title = (e > 0 ? "(" + e + ") " : "") + "Tinode");
      }
      function H(e, t, s) {
        let a = null;
        if (((e = e && e.trim()) && (a = { fn: e }), t)) {
          a = a || {};
          let e = s;
          const n = /^data:(image\/[-a-z0-9+.]+)?(;base64)?,/i.exec(t);
          n
            ? ((e = n[1]),
              (a.photo = { data: t.substring(t.indexOf(",") + 1) }))
            : (a.photo = { ref: t }),
            (a.photo.type = (e || "image/jpeg").substring("image/".length));
        }
        return a;
      }
      function K(e, t) {
        if (e === t) return !0;
        if (!Array.isArray(e) || !Array.isArray(t)) return !1;
        if (e.length != t.length) return !1;
        e.sort(), t.sort();
        for (let s = 0, a = e.length; s < a; s++) if (e[s] !== t[s]) return !1;
        return !0;
      }
      function W(e, t) {
        if (!e) return null;
        if (
          ((e = e.replace(/[^\x20-\x7E]/gim, "").trim()),
          !/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(e))
        )
          return e;
        if (/^blob:http/.test(e)) return e;
        const s = Array.isArray(t) ? t.join("|") : "http|https";
        return new RegExp("^((" + s + "):|//)", "i").test(e) ? e : null;
      }
      function V(e) {
        switch (e) {
          case h().MESSAGE_STATUS_SENDING:
            return { name: "access_time" };
          case h().MESSAGE_STATUS_FAILED:
            return { name: "warning", color: "amber" };
          case h().MESSAGE_STATUS_SENT:
            return { name: "done" };
          case h().MESSAGE_STATUS_RECEIVED:
            return { name: "done_all" };
          case h().MESSAGE_STATUS_READ:
            return { name: "done_all", color: "blue" };
        }
        return null;
      }
      const G = (0, l.defineMessages)({
        message_sending: {
          id: "message_sending",
          defaultMessage: [{ type: 0, value: "sending..." }],
        },
        message_sending_failed: {
          id: "message_sending_failed",
          defaultMessage: [{ type: 0, value: "failed" }],
        },
      });
      class J extends n().PureComponent {
        render() {
          const { formatMessage: e } = this.props.intl;
          let t;
          t =
            this.props.received <= h().MESSAGE_STATUS_SENDING
              ? e(G.message_sending)
              : this.props.received == h().MESSAGE_STATUS_FAILED
              ? e(G.message_sending_failed)
              : N(this.props.timestamp, this.props.intl.locale);
          const s = V(this.props.received),
            a = s
              ? n().createElement(
                  "i",
                  { className: "material-icons small " + s.color },
                  s.name
                )
              : null;
          return n().createElement(
            "span",
            { className: "timestamp" },
            t,
            " ",
            a
          );
        }
      }
      const Q = (0, l.injectIntl)(J);
      class Y extends n().PureComponent {
        render() {
          return this.props.count > 0
            ? n().createElement(
                "span",
                { className: "unread" },
                this.props.count > 9 ? "9+" : this.props.count
              )
            : null;
        }
      }
      const Z = (0, l.defineMessages)({
        drafty_image: {
          id: "drafty_image",
          defaultMessage: [{ type: 0, value: "Picture" }],
        },
        drafty_form: {
          id: "drafty_form",
          defaultMessage: [{ type: 0, value: "Form:" }],
        },
        drafty_attachment: {
          id: "drafty_attachment",
          defaultMessage: [{ type: 0, value: "Attachment" }],
        },
      });
      class X extends n().Component {
        constructor(e) {
          super(e),
            (this.handleClick = this.handleClick.bind(this)),
            (this.handleContextClick = this.handleContextClick.bind(this));
        }
        handleClick(e) {
          e.preventDefault(),
            e.stopPropagation(),
            this.props.onSelected &&
              this.props.onSelected(this.props.item, this.props.index);
        }
        handleContextClick(e) {
          e.preventDefault(),
            e.stopPropagation(),
            this.props.showContextMenu({
              topicName: this.props.item,
              y: e.pageY,
              x: e.pageX,
            });
        }
        render() {
          let e = this.props.title;
          e
            ? e.length > 30 && (e = e.substring(0, 28) + "…")
            : (e = n().createElement(
                "i",
                null,
                n().createElement(l.FormattedMessage, {
                  id: "unnamed_topic",
                  defaultMessage: [{ type: 0, value: "Unnamed" }],
                })
              ));
          const t = this.props.now ? "online" : "offline",
            s = !this.props.avatar || this.props.avatar,
            a = this.props.badges ? this.props.badges.slice() : [],
            i = [];
          this.props.acs &&
            (this.props.showMode &&
              a.push({ name: this.props.acs.getMode(), key: "mode" }),
            this.props.acs.isMuted() && i.push({ icon: "muted" }),
            this.props.acs.isJoiner() || i.push({ icon: "banned" }));
          const o = this.props.preview
              ? "string" == typeof this.props.preview
                ? this.props.preview
                : n().createElement(
                    n().Fragment,
                    null,
                    d.Drafty.format(this.props.preview, $, this)
                  )
              : this.props.comment,
            r = V(this.props.received),
            c = r
              ? n().createElement(
                  "i",
                  {
                    className:
                      "material-icons small space-right" +
                      (r.color ? " " + r.color : ""),
                  },
                  r.name
                )
              : null;
          return n().createElement(
            "li",
            {
              className:
                !this.props.showCheckmark && this.props.selected
                  ? "selected"
                  : null,
              onClick: this.handleClick,
            },
            n().createElement(
              "div",
              { className: "avatar-box" },
              n().createElement(P, {
                avatar: s,
                title: this.props.title,
                topic: this.props.item,
              }),
              this.props.showOnline
                ? n().createElement("span", { className: t })
                : this.props.showCheckmark && this.props.selected
                ? n().createElement(
                    "i",
                    { className: "checkmark material-icons" },
                    "check_circle"
                  )
                : null
            ),
            n().createElement(
              "div",
              { className: "text-box" },
              n().createElement(
                "div",
                null,
                n().createElement("span", { className: "contact-title" }, e),
                this.props.isChannel
                  ? n().createElement("img", {
                      src: "/img/channel.png",
                      className: "channel",
                      alt: "channel",
                    })
                  : null,
                n().createElement(Y, { count: this.props.unread }),
                n().createElement(O, { badges: i })
              ),
              this.props.showMode
                ? n().createElement(
                    "span",
                    null,
                    n().createElement(O, { badges: a })
                  )
                : n().createElement(
                    "div",
                    { className: "contact-comment" },
                    c,
                    o || " "
                  )
            ),
            this.props.showContextMenu
              ? n().createElement(
                  "span",
                  { className: "menuTrigger" },
                  n().createElement(
                    "a",
                    { href: "#", onClick: this.handleContextClick },
                    n().createElement(
                      "i",
                      { className: "material-icons" },
                      "expand_more"
                    )
                  )
                )
              : null
          );
        }
      }
      function $(e, t, s, a) {
        let i = d.Drafty.tagName(e);
        const o = { key: a };
        if (i) {
          const { formatMessage: a } = this.props.intl;
          switch (e) {
            case "BR":
              (i = n().Fragment), (s = [" "]);
              break;
            case "HL":
              o.className = "highlight preview";
              break;
            case "LN":
              i = "span";
              break;
            case "IM":
              (i = n().Fragment),
                (s = [
                  n().createElement(
                    "i",
                    { key: "im", className: "material-icons" },
                    "photo"
                  ),
                  a(Z.drafty_image),
                ]);
              break;
            case "BN":
              (i = "span"), (o.className = "flat-button faux");
              break;
            case "FM":
              (i = n().Fragment),
                (s = [
                  n().createElement(
                    "i",
                    { key: "fm", className: "material-icons" },
                    "dashboard"
                  ),
                  a(Z.drafty_form),
                ].concat(s || []));
              break;
            case "RW":
              i = n().Fragment;
              break;
            case "EX":
              if (t && "application/json" == t.mime) return null;
              (i = n().Fragment),
                (s = [
                  n().createElement(
                    "i",
                    { key: "ex", className: "material-icons" },
                    "attachment"
                  ),
                  a(Z.drafty_attachment),
                ]);
              break;
            default:
              "_UNKN" == i &&
                ((i = n().Fragment),
                (s = [
                  n().createElement(
                    "i",
                    { key: "unkn", className: "material-icons" },
                    "extension"
                  ),
                ]));
          }
          return n().createElement(i, o, s);
        }
        return s;
      }
      const ee = (0, l.injectIntl)(X);
      class te extends n().PureComponent {
        constructor(e) {
          super(e), (this.handleClick = this.handleClick.bind(this));
        }
        handleClick(e) {
          e.preventDefault(),
            e.stopPropagation(),
            this.props.onAction(this.props.action);
        }
        render() {
          const { formatMessage: e } = this.props.intl;
          return n().createElement(
            "li",
            { onClick: this.handleClick, className: "action" },
            n().createElement(
              "div",
              { className: "action-text" },
              e(this.props.title, this.props.values)
            )
          );
        }
      }
      const se = (0, l.injectIntl)(te),
        ae = (0, l.defineMessages)({
          badge_you: {
            id: "badge_you",
            defaultMessage: [{ type: 0, value: "you" }],
          },
          badge_owner: {
            id: "badge_owner",
            defaultMessage: [{ type: 0, value: "owner" }],
          },
        });
      class ne extends n().Component {
        render() {
          const { formatMessage: e } = this.props.intl,
            t = Array.isArray(this.props.topicSelected),
            s = [];
          let a = 0;
          return (
            this.props.contacts &&
              this.props.contacts.length > 0 &&
              this.props.contacts.map((i) => {
                if (i.action)
                  s.push(
                    n().createElement(se, {
                      title: i.title,
                      action: i.action,
                      values: i.values,
                      key: i.action,
                      onAction: this.props.onAction,
                    })
                  );
                else {
                  const o = this.props.showMode ? i.user : i.topic || i.user;
                  if (this.props.filterFunc && this.props.filter) {
                    const e = [o];
                    if (
                      (i.private &&
                        i.private.comment &&
                        e.push(("" + i.private.comment).toLowerCase()),
                      i.public &&
                        i.public.fn &&
                        e.push(("" + i.public.fn).toLowerCase()),
                      !this.props.filterFunc(this.props.filter, e))
                    )
                      return;
                  }
                  const l = h().isChannelTopicName(o),
                    r = t
                      ? this.props.topicSelected.indexOf(o) > -1
                      : this.props.topicSelected === o,
                    c = [];
                  this.props.showMode &&
                    (o == this.props.myUserId &&
                      c.push({ name: e(ae.badge_you), color: "green" }),
                    i.acs &&
                      i.acs.isOwner() &&
                      c.push({ name: e(ae.badge_owner), color: "blue" }));
                  const p = Array.isArray(i.private)
                    ? i.private.join(",")
                    : i.private
                    ? i.private.comment
                    : null;
                  let m, u;
                  if (!this.props.showMode && i.latestMessage) {
                    const e = i.latestMessage(!0);
                    e &&
                      ((u = e._status || i.msgStatus(e, !0)),
                      (m =
                        "string" == typeof e.content
                          ? e.content.substr(0, 80)
                          : d.Drafty.preview(e.content, 80)));
                  }
                  s.push(
                    n().createElement(ee, {
                      title: i.public ? i.public.fn : null,
                      avatar: I(i.public ? i.public.photo : null),
                      comment: p,
                      preview: m,
                      received: u,
                      unread: this.props.showUnread ? i.unread : 0,
                      now: i.online && this.props.connected,
                      acs: i.acs,
                      showMode: this.props.showMode,
                      badges: c,
                      showCheckmark: t,
                      selected: r,
                      showOnline: this.props.showOnline && !l,
                      isChannel: l,
                      onSelected: this.props.onTopicSelected,
                      showContextMenu: this.props.showContextMenu,
                      item: o,
                      index: s.length,
                      key: o,
                    })
                  ),
                    a++;
                }
              }, this),
            n().createElement(
              "div",
              { className: this.props.noScroll ? null : "scrollable-panel" },
              0 == a
                ? n().createElement("div", {
                    className: "center-medium-text",
                    dangerouslySetInnerHTML: {
                      __html: this.props.emptyListMessage,
                    },
                  })
                : null,
              s.length > 0
                ? n().createElement("ul", { className: "contact-box" }, s)
                : null
            )
          );
        }
      }
      const ie = (0, l.injectIntl)(ne);
      class oe extends n().PureComponent {
        render() {
          return n().createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), this.props.onCancel();
              },
            },
            n().createElement("i", { className: "material-icons" }, "close")
          );
        }
      }
      class le extends n().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { show: !1 }),
            (this.hide = this.hide.bind(this));
        }
        componentDidUpdate(e) {
          e.level !== this.props.level &&
            this.setState({ show: !!this.props.level });
        }
        hide() {
          this.setState({ show: !1 }),
            this.props.onClearError && this.props.onClearError();
        }
        render() {
          const e =
              { err: "error", warn: "warning", info: "info" }[
                this.props.level
              ] || "",
            t = "info-box " + e;
          return n().createElement(
            "div",
            { className: t },
            n().createElement(
              "div",
              { className: "icon" },
              n().createElement("i", { className: "material-icons" }, e)
            ),
            n().createElement(
              "span",
              null,
              this.props.text,
              this.props.action
                ? n().createElement(
                    n().Fragment,
                    null,
                    n().createElement(
                      "a",
                      {
                        href: "#",
                        style: { whiteSpace: "nowrap" },
                        onClick: (e) => {
                          e.preventDefault(), this.props.action();
                        },
                      },
                      this.props.actionText
                    )
                  )
                : null
            ),
            n().createElement(
              "div",
              { className: "cancel" },
              n().createElement(oe, { onCancel: this.hide })
            )
          );
        }
      }
      class re extends n().PureComponent {
        constructor(e) {
          super(e), (this.handleCancel = this.handleCancel.bind(this));
        }
        handleCancel(e) {
          e.preventDefault(),
            this.props.onCancel(this.props.topic, this.props.index);
        }
        render() {
          const e = this.props.title || this.props.topic,
            t = this.props.invalid ? "chip invalid" : "chip";
          return n().createElement(
            "div",
            { className: t },
            this.props.noAvatar
              ? n().createElement("span", { className: "spacer" })
              : n().createElement(
                  "div",
                  { className: "avatar-box" },
                  n().createElement(P, {
                    avatar: this.props.avatar || !0,
                    topic: this.props.topic,
                    title: this.props.title,
                  })
                ),
            n().createElement("span", null, e),
            this.props.onCancel && !this.props.required
              ? n().createElement(
                  "a",
                  { href: "#", onClick: this.handleCancel },
                  "×"
                )
              : n().createElement("span", { className: "spacer" })
          );
        }
      }
      class ce extends n().Component {
        constructor(e) {
          super(e),
            (this.state = ce.deriveStateFromProps(e)),
            (this.state.input = ""),
            (this.state.focused = !1),
            (this.handleTextInput = this.handleTextInput.bind(this)),
            (this.removeChipAt = this.removeChipAt.bind(this)),
            (this.handleChipCancel = this.handleChipCancel.bind(this)),
            (this.handleFocusGained = this.handleFocusGained.bind(this)),
            (this.handleFocusLost = this.handleFocusLost.bind(this)),
            (this.handleKeyDown = this.handleKeyDown.bind(this));
        }
        static deriveStateFromProps(e) {
          return {
            placeholder: e.chips ? "" : e.prompt,
            sortedChips: ce.sortChips(e.chips, e.staticMembers),
            chipIndex: ce.indexChips(e.chips),
          };
        }
        componentDidUpdate(e, t) {
          (e.chips == this.props.chips &&
            e.staticMembers == this.props.staticMembers &&
            e.prompt == this.props.prompt) ||
            this.setState(ce.deriveStateFromProps(this.props)),
            (!t || this.props.chips.length > t.sortedChips.length) &&
              this.setState({ input: "" });
        }
        static indexChips(e) {
          const t = {};
          let s = 0;
          return (
            e.map((e) => {
              (t[e.user] = s), s++;
            }),
            t
          );
        }
        static sortChips(e, t) {
          const s = [],
            a = [];
          return (
            e.map((e) => {
              t && t.includes(e.user) ? s.push(e) : a.push(e);
            }),
            s.concat(a)
          );
        }
        handleTextInput(e) {
          this.setState({ input: e.target.value }),
            this.props.filterFunc && this.props.filterFunc(e.target.value);
        }
        removeChipAt(e) {
          const t = this.state.sortedChips[e];
          this.props.onChipRemoved(t.user, this.state.chipIndex[t.user]);
        }
        handleChipCancel(e, t) {
          this.removeChipAt(t);
        }
        handleFocusGained() {
          this.setState({ focused: !0 });
        }
        handleFocusLost() {
          this.setState({ focused: !1 }),
            this.props.onFocusLost && this.props.onFocusLost(this.state.input);
        }
        handleKeyDown(e) {
          if ("Backspace" === e.key) {
            if (
              0 == this.state.input.length &&
              this.state.sortedChips.length > 0
            ) {
              const e = this.state.sortedChips.length - 1;
              this.state.sortedChips[e].user !== this.props.staticMembers &&
                this.removeChipAt(e);
            }
          } else
            "Enter" === e.key
              ? this.props.onEnter && this.props.onEnter(this.state.input)
              : "Escape" === e.key &&
                this.props.onCancel &&
                this.props.onCancel();
        }
        render() {
          const e = [];
          let t = 0;
          const s = this.props.staticMembers || [];
          this.state.sortedChips.map((a) => {
            e.push(
              n().createElement(re, {
                onCancel: this.handleChipCancel,
                avatar: I(a.public ? a.public.photo : null),
                title: a.public ? a.public.fn : void 0,
                noAvatar: this.props.avatarDisabled,
                topic: a.user,
                required: s.includes(a.user),
                invalid: a.invalid,
                index: t,
                key: a.user,
              })
            ),
              t++;
          });
          const a = "chip-input" + (this.state.focused ? " focused" : "");
          return n().createElement(
            "div",
            { className: a },
            e,
            n().createElement("input", {
              type: "text",
              placeholder: this.state.placeholder,
              onChange: this.handleTextInput,
              onFocus: this.handleFocusGained,
              onBlur: this.handleFocusLost,
              onKeyDown: this.handleKeyDown,
              value: this.state.input,
              autoFocus: !0,
            })
          );
        }
      }
      const de = (0, l.defineMessages)({
        no_contacts: {
          id: "no_contacts",
          defaultMessage: [{ type: 0, value: "You have no contacts :-(" }],
        },
        contacts_not_found_short: {
          id: "contacts_not_found_short",
          defaultMessage: [
            { type: 0, value: "No contacts match '" },
            { type: 1, value: "query" },
            { type: 0, value: "'" },
          ],
        },
      });
      class he extends n().Component {
        constructor(e) {
          super(e),
            (this.state = {
              members: e.members,
              index: he.indexMembers(e.members),
              staticMembers: he.staticMembers(
                e.members,
                e.keepInitialMembers,
                e.requiredMember
              ),
              contactFilter: "",
              noContactsMessage: e.intl.formatMessage(de.no_contacts),
              selectedContacts: he.selectedContacts(e.members),
            }),
            (this.handleContactSelected =
              this.handleContactSelected.bind(this)),
            (this.handleMemberRemoved = this.handleMemberRemoved.bind(this)),
            (this.handleContactFilter = this.handleContactFilter.bind(this)),
            (this.handleSubmit = this.handleSubmit.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this));
        }
        static indexMembers(e) {
          let t = {};
          return (
            e.map((e) => {
              t[e.user] = { delta: 0, present: !0 };
            }),
            t
          );
        }
        static staticMembers(e, t, s) {
          let a = [];
          return (
            e.map((e) => {
              (t || e.user == s) && a.push(e.user);
            }),
            a
          );
        }
        static selectedContacts(e) {
          let t = [];
          return (
            e.map((e) => {
              t.push(e.user);
            }),
            t
          );
        }
        handleContactSelected(e, t) {
          let s = this.state.index[e];
          if (s) {
            if (s.present) return;
            (s.delta += 1), (s.present = !0);
          } else s = { delta: 1, present: !0 };
          let a = this.state.members.slice();
          a.push(this.props.contacts[t]);
          const n = he.selectedContacts(a),
            i = this.state.index;
          (i[e] = s),
            this.setState({ members: a, index: i, selectedContacts: n });
        }
        handleMemberRemoved(e, t) {
          const s = this.state.index[e];
          if (!s || !s.present) return;
          (s.present = !1), (s.delta -= 1);
          let a = this.state.members.slice();
          a.splice(t, 1);
          const n = he.selectedContacts(a),
            i = this.state.index;
          (i[e] = s),
            this.setState({ members: a, index: i, selectedContacts: n });
        }
        handleContactFilter(e) {
          const { formatMessage: t } = this.props.intl,
            s = e
              ? t(de.contacts_not_found_short, { query: e })
              : t(de.no_contacts);
          this.setState({ contactFilter: e, noContactsMessage: s });
        }
        static doContactFiltering(e, t) {
          if (e) {
            for (let s = 0; s < t.length; s++)
              if (t[s].indexOf(e) >= 0) return !0;
            return !1;
          }
          return !0;
        }
        handleSubmit() {
          var e = this,
            t = [],
            s = [],
            a = [];
          Object.keys(this.state.index).map(function (n) {
            e.state.index[n].present && t.push(n),
              e.state.index[n].delta > 0
                ? s.push(n)
                : e.state.index[n].delta < 0 && a.push(n);
          }),
            this.props.onSubmit(t, s, a);
        }
        handleCancel() {
          this.props.onCancel();
        }
        render() {
          const { formatMessage: e } = this.props.intl;
          return n().createElement(
            "div",
            { id: "group-manager" },
            n().createElement(
              "div",
              { className: "panel-form-row" },
              n().createElement(
                "label",
                { className: "small" },
                n().createElement(l.FormattedMessage, {
                  id: "title_group_members",
                  defaultMessage: [{ type: 0, value: "Group Members" }],
                })
              )
            ),
            n().createElement(
              "div",
              { className: "panel-form-row" },
              n().createElement(ce, {
                chips: this.state.members,
                staticMembers: this.state.staticMembers,
                prompt: "add members",
                filterFunc: this.handleContactFilter,
                onChipRemoved: this.handleMemberRemoved,
              })
            ),
            n().createElement(
              "div",
              { className: "panel-form-row" },
              n().createElement(
                "label",
                { className: "small" },
                n().createElement(l.FormattedMessage, {
                  id: "title_all_contacts",
                  defaultMessage: [{ type: 0, value: "All Contacts" }],
                })
              )
            ),
            n().createElement(ie, {
              contacts: this.props.contacts,
              myUserId: this.props.myUserId,
              topicSelected: this.state.selectedContacts,
              filter: this.state.contactFilter,
              filterFunc: he.doContactFiltering,
              emptyListMessage: this.state.noContactsMessage,
              showOnline: !1,
              showUnread: !1,
              onTopicSelected: this.handleContactSelected,
            }),
            n().createElement(
              "div",
              { id: "group-manager-buttons", className: "panel-form-row" },
              n().createElement(
                "button",
                { className: "primary", onClick: this.handleSubmit },
                n().createElement(l.FormattedMessage, {
                  id: "button_ok",
                  defaultMessage: [{ type: 0, value: "OK" }],
                })
              ),
              n().createElement(
                "button",
                { className: "secondary", onClick: this.handleCancel },
                n().createElement(l.FormattedMessage, {
                  id: "button_cancel",
                  defaultMessage: [{ type: 0, value: "Cancel" }],
                })
              )
            )
          );
        }
      }
      const pe = (0, l.injectIntl)(he);
      class me extends n().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { value: this.props.value, visible: !1 }),
            (this.handleVisibility = this.handleVisibility.bind(this)),
            (this.handeTextChange = this.handeTextChange.bind(this)),
            (this.handleKeyDown = this.handleKeyDown.bind(this)),
            (this.handleEditingFinished =
              this.handleEditingFinished.bind(this));
        }
        handeTextChange(e) {
          this.setState({ value: e.target.value }),
            this.props.onChange && this.props.onChange(e);
        }
        handleVisibility(e) {
          e.preventDefault(), this.setState({ visible: !this.state.visible });
        }
        handleKeyDown(e) {
          27 == e.keyCode
            ? (this.setState({ value: this.props.value, visible: !1 }),
              this.props.onFinished && this.props.onFinished())
            : 13 == e.keyCode && this.handleEditingFinished();
        }
        handleEditingFinished(e) {
          if (e) {
            let t = e.currentTarget;
            setTimeout(() => {
              t.contains(document.activeElement) ||
                (this.props.onFinished &&
                  this.props.onFinished(this.state.value));
            }, 0);
          } else
            this.props.onFinished &&
              this.props.onFinished(this.state.value.trim());
        }
        render() {
          return n().createElement(
            "div",
            {
              tabIndex: "-1",
              className: "group-focus",
              onBlur: this.handleEditingFinished,
            },
            n().createElement("input", {
              className: "with-visibility",
              type: this.state.visible ? "text" : "password",
              value: this.state.value,
              placeholder: this.props.placeholder,
              required: this.props.required ? "required" : "",
              autoFocus: this.props.autoFocus ? "autoFocus" : "",
              autoComplete: this.props.autoComplete,
              onChange: this.handeTextChange,
              onKeyDown: this.handleKeyDown,
            }),
            n().createElement(
              "span",
              { onClick: this.handleVisibility },
              n().createElement(
                "i",
                { className: "material-icons clickable light-gray" },
                this.state.visible ? "visibility" : "visibility_off"
              )
            )
          );
        }
      }
      class ue extends n().Component {
        constructor(e) {
          super(e),
            (this.state = {
              active: e.active,
              initialValue: e.value || "",
              value: e.value || "",
            }),
            (this.handeTextChange = this.handeTextChange.bind(this)),
            (this.handleKeyDown = this.handleKeyDown.bind(this)),
            (this.handleStartEditing = this.handleStartEditing.bind(this)),
            (this.handleEditingFinished =
              this.handleEditingFinished.bind(this)),
            (this.handlePasswordFinished =
              this.handlePasswordFinished.bind(this));
        }
        componentDidUpdate(e, t) {
          const s = this.props.value || "";
          t.initialValue == s ||
            t.active ||
            this.setState({ initialValue: s, value: s });
        }
        handeTextChange(e) {
          this.setState({ value: e.target.value });
        }
        handleKeyDown(e) {
          27 === e.keyCode
            ? this.setState({ value: this.props.value, active: !1 })
            : 13 === e.keyCode && this.handleEditingFinished(e);
        }
        handleStartEditing() {
          this.props.readOnly ||
            (o().findDOMNode(this).focus(), this.setState({ active: !0 }));
        }
        handleEditingFinished(e) {
          if (this.props.required && !e.target.checkValidity())
            return void this.setState({ value: this.props.value, active: !1 });
          this.setState({ active: !1 });
          let t = this.state.value.trim();
          (t || this.props.value) &&
            t !== this.props.value &&
            this.props.onFinished(t);
        }
        handlePasswordFinished(e) {
          this.setState({ active: !1 }),
            e && e !== this.props.value && this.props.onFinished(e);
        }
        render() {
          if (this.state.active) var e = this.props.type || "text";
          else {
            var t =
                "password" == this.props.type ? "••••••••" : this.state.value,
              s = "in-place-edit" + (this.props.readOnly ? " disabled" : "");
            t || ((t = this.props.placeholder), (s += " placeholder")),
              t.length > 20 && (t = t.substring(0, 19) + "...");
          }
          return this.state.active
            ? "password" == e
              ? n().createElement(me, {
                  value: this.state.value,
                  placeholder: this.props.placeholder,
                  required: this.props.required ? "required" : "",
                  autoComplete: this.props.autoComplete,
                  autoFocus: !0,
                  onFinished: this.handlePasswordFinished,
                })
              : n().createElement("input", {
                  type: e,
                  value: this.state.value,
                  placeholder: this.props.placeholder,
                  required: this.props.required ? "required" : "",
                  autoComplete: this.props.autoComplete,
                  autoFocus: !0,
                  onChange: this.handeTextChange,
                  onKeyDown: this.handleKeyDown,
                  onBlur: this.handleEditingFinished,
                })
            : n().createElement(
                "span",
                { className: s, onClick: this.handleStartEditing },
                n().createElement("span", { className: "content" }, t)
              );
        }
      }
      class _e extends n().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { open: e.open }),
            (this.handleToggle = this.handleToggle.bind(this));
        }
        handleToggle() {
          const e = !this.state.open;
          this.setState({ open: e }),
            this.props.onToggle && this.props.onToggle(e);
        }
        render() {
          return n().createElement(
            "label",
            { className: "small clean-clickable", onClick: this.handleToggle },
            this.props.title,
            "...",
            this.state.open
              ? n().createElement(
                  "i",
                  { className: "material-icons" },
                  "expand_more"
                )
              : n().createElement(
                  "i",
                  { className: "material-icons" },
                  "chevron_right"
                )
          );
        }
      }
      const ge = (0, l.defineMessages)({
        joiner: {
          id: "permission_join",
          defaultMessage: [
            { type: 0, value: "Join (" },
            { type: 1, value: "val" },
            { type: 0, value: ")" },
          ],
        },
        reader: {
          id: "permission_read",
          defaultMessage: [
            { type: 0, value: "Read (" },
            { type: 1, value: "val" },
            { type: 0, value: ")" },
          ],
        },
        writer: {
          id: "permission_write",
          defaultMessage: [
            { type: 0, value: "Write (" },
            { type: 1, value: "val" },
            { type: 0, value: ")" },
          ],
        },
        preser: {
          id: "permission_pres",
          defaultMessage: [
            { type: 0, value: "Get notified (" },
            { type: 1, value: "val" },
            { type: 0, value: ")" },
          ],
        },
        approver: {
          id: "permission_admin",
          defaultMessage: [
            { type: 0, value: "Approve (" },
            { type: 1, value: "val" },
            { type: 0, value: ")" },
          ],
        },
        sharer: {
          id: "permission_share",
          defaultMessage: [
            { type: 0, value: "Share (" },
            { type: 1, value: "val" },
            { type: 0, value: ")" },
          ],
        },
        deleter: {
          id: "permission_delete",
          defaultMessage: [
            { type: 0, value: "Delete (" },
            { type: 1, value: "val" },
            { type: 0, value: ")" },
          ],
        },
        owner: {
          id: "permission_owner",
          defaultMessage: [
            { type: 0, value: "Owner (" },
            { type: 1, value: "val" },
            { type: 0, value: ")" },
          ],
        },
      });
      class be extends n().Component {
        constructor(e) {
          super(e),
            (this.state = { mode: (e.mode || "").replace("N", "") }),
            (this.handleChange = this.handleChange.bind(this)),
            (this.handleSubmit = this.handleSubmit.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this));
        }
        handleChange(e) {
          let t = this.state.mode;
          -1 == t.indexOf(e) ? (t += e) : (t = t.replace(e, "")),
            this.setState({ mode: t });
        }
        handleSubmit() {
          var e = (this.state.mode || "N").split("").sort().join("");
          e !== (this.props.mode || "N").split("").sort().join("")
            ? this.props.onSubmit(e)
            : this.props.onCancel();
        }
        handleCancel() {
          this.props.onCancel();
        }
        render() {
          const { formatMessage: e } = this.props.intl,
            t = "JRWPASDO",
            s = {
              J: e(ge.joiner, { val: "J" }),
              R: e(ge.reader, { val: "R" }),
              W: e(ge.writer, { val: "W" }),
              P: e(ge.preser, { val: "P" }),
              A: e(ge.approver, { val: "A" }),
              S: e(ge.sharer, { val: "S" }),
              D: e(ge.deleter, { val: "D" }),
              O: e(ge.owner, { val: "O" }),
            };
          let a = this.props.skip || "",
            i = this.state.mode,
            o = (this.props.compare || "").replace("N", ""),
            r = [];
          for (let e = 0; e < t.length; e++) {
            let l = t.charAt(e);
            (a.indexOf(l) >= 0 && i.indexOf(l) < 0) ||
              r.push(
                n().createElement(
                  "tr",
                  { key: l },
                  n().createElement("td", null, s[l]),
                  n().createElement(
                    "td",
                    { className: "checkbox" },
                    a.indexOf(l) < 0
                      ? n().createElement(z, {
                          name: l,
                          checked: i.indexOf(l) >= 0,
                          onChange: this.handleChange,
                        })
                      : n().createElement(z, {
                          name: l,
                          checked: i.indexOf(l) >= 0,
                        })
                  ),
                  this.props.compare
                    ? n().createElement(
                        "td",
                        { className: "checkbox" },
                        n().createElement(z, {
                          name: l,
                          checked: o.indexOf(l) >= 0,
                        })
                      )
                    : null
                )
              );
          }
          return n().createElement(
            "div",
            { className: "panel-form-column" },
            this.props.userTitle
              ? n().createElement(
                  "ul",
                  { className: "contact-box" },
                  n().createElement(ee, {
                    item: this.props.item,
                    title: this.props.userTitle,
                    avatar: I(
                      this.props.userAvatar ? this.props.userAvatar : null
                    ),
                  })
                )
              : null,
            n().createElement(
              "label",
              { className: "small" },
              n().createElement(l.FormattedMessage, {
                id: "title_permissions",
                defaultMessage: [{ type: 0, value: "Permissions" }],
              })
            ),
            n().createElement(
              "table",
              { className: "permission-editor" },
              this.props.compare
                ? n().createElement(
                    "thead",
                    null,
                    n().createElement(
                      "tr",
                      null,
                      n().createElement("th", null),
                      n().createElement("th", null, this.props.modeTitle),
                      n().createElement("th", null, this.props.compareTitle)
                    )
                  )
                : null,
              n().createElement("tbody", null, r)
            ),
            n().createElement("br", null),
            n().createElement(
              "div",
              { className: "dialog-buttons" },
              n().createElement(
                "button",
                { className: "outline", onClick: this.handleCancel },
                n().createElement(l.FormattedMessage, {
                  id: "button_cancel",
                  defaultMessage: [{ type: 0, value: "Cancel" }],
                })
              ),
              n().createElement(
                "button",
                { className: "primary", onClick: this.handleSubmit },
                n().createElement(l.FormattedMessage, {
                  id: "button_ok",
                  defaultMessage: [{ type: 0, value: "OK" }],
                })
              )
            )
          );
        }
      }
      const ve = (0, l.injectIntl)(be);
      class fe extends n().Component {
        constructor(e) {
          super(e),
            (this.state = {
              tags: this.props.tags,
              tagInput: "",
              activated: this.props.activated,
            }),
            (this.handleTagInput = this.handleTagInput.bind(this)),
            (this.handleAddTag = this.handleAddTag.bind(this)),
            (this.handleRemoveTag = this.handleRemoveTag.bind(this)),
            (this.handleSubmit = this.handleSubmit.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this));
        }
        static getDerivedStateFromProps(e, t) {
          return K(e.tags, t.tags) || t.activated ? null : { tags: e.tags };
        }
        handleTagInput(e) {
          if ((this.setState({ tagInput: e }), e.length > 0)) {
            const t = e[e.length - 1];
            '"' == e[0]
              ? e.length > 1 &&
                '"' == t &&
                this.handleAddTag(e.substring(1, e.length - 1))
              : ("," != t && " " != t && ";" != t && '"' != t) ||
                this.handleAddTag(e.substring(0, e.length - 1).trim());
          }
        }
        handleAddTag(e) {
          const t = this.props.tinode.getServerLimit("maxTagCount", 16);
          if (e.length > 0 && this.state.tags.length < t) {
            const t = this.state.tags.slice(0);
            return (
              t.push(e),
              this.setState({ tags: t, tagInput: "" }),
              this.props.onTagsChanged && this.props.onTagsChanged(t),
              t
            );
          }
          return this.state.tags;
        }
        handleRemoveTag(e, t) {
          const s = this.state.tags.slice(0);
          s.splice(t, 1),
            this.setState({ tags: s }),
            this.props.onTagsChanged && this.props.onTagsChanged(s);
        }
        handleSubmit() {
          this.props.onSubmit(this.handleAddTag(this.state.tagInput.trim())),
            this.setState({ activated: !1, tags: this.props.tags });
        }
        handleCancel() {
          this.setState({ activated: !1, tagInput: "", tags: this.props.tags }),
            this.props.onCancel && this.props.onCancel();
        }
        render() {
          const e = this.props.tinode.getServerLimit("minTagLength", 2),
            t = this.props.tinode.getServerLimit("maxTagLength", 96);
          let s = [];
          return (
            this.state.activated
              ? this.state.tags.map((a) => {
                  s.push({ user: a, invalid: a.length < e || a.length > t });
                })
              : (this.state.tags.map((e) => {
                  s.push(
                    n().createElement(
                      "span",
                      { className: "badge", key: s.length },
                      e
                    )
                  );
                }),
                0 == s.length &&
                  (s = n().createElement(
                    "i",
                    null,
                    n().createElement(l.FormattedMessage, {
                      id: "tags_not_found",
                      defaultMessage: [
                        { type: 0, value: "No tags defined. Add some." },
                      ],
                    })
                  ))),
            n().createElement(
              "div",
              { className: "panel-form-column" },
              n().createElement(
                "div",
                { className: "panel-form-row" },
                n().createElement(
                  "label",
                  { className: "small" },
                  this.props.title
                )
              ),
              this.state.activated
                ? n().createElement(
                    "div",
                    null,
                    n().createElement(
                      l.FormattedMessage,
                      {
                        id: "tags_editor_no_tags",
                        defaultMessage: [{ type: 0, value: "Add some tags" }],
                      },
                      (e) =>
                        n().createElement(ce, {
                          chips: s,
                          avatarDisabled: !0,
                          prompt: e,
                          onEnter: this.handleAddTag,
                          onFocusLost: this.handleAddTag,
                          onCancel: this.handleCancel,
                          onChipRemoved: this.handleRemoveTag,
                          filterFunc: this.handleTagInput,
                        })
                    ),
                    this.props.onSubmit || this.props.onCancel
                      ? n().createElement(
                          "div",
                          {
                            id: "tag-manager-buttons",
                            className: "dialog-buttons panel-form-row",
                          },
                          n().createElement(
                            "button",
                            {
                              className: "outline",
                              onClick: this.handleCancel,
                            },
                            n().createElement(l.FormattedMessage, {
                              id: "button_cancel",
                              defaultMessage: [{ type: 0, value: "Cancel" }],
                            })
                          ),
                          n().createElement(
                            "button",
                            {
                              className: "primary",
                              onClick: this.handleSubmit,
                            },
                            n().createElement(l.FormattedMessage, {
                              id: "button_ok",
                              defaultMessage: [{ type: 0, value: "OK" }],
                            })
                          )
                        )
                      : null
                  )
                : n().createElement(
                    "div",
                    { className: "quoted" },
                    n().createElement(
                      "a",
                      {
                        href: "#",
                        className: "flat-button",
                        onClick: (e) => {
                          e.preventDefault(), this.setState({ activated: !0 });
                        },
                      },
                      n().createElement(
                        "i",
                        { className: "material-icons" },
                        "edit"
                      ),
                      "  ",
                      n().createElement(l.FormattedMessage, {
                        id: "title_manage_tags",
                        defaultMessage: [{ type: 0, value: "Manage" }],
                      })
                    ),
                    n().createElement(n().Fragment, null, s)
                  )
            )
          );
        }
      }
      const Ee = (0, l.defineMessages)({
        requested: {
          id: "requested_permissions",
          defaultMessage: [{ type: 0, value: "Requested" }],
        },
        granted: {
          id: "granted_permissions",
          defaultMessage: [{ type: 0, value: "Granted" }],
        },
        edit_permissions: {
          id: "menu_item_edit_permissions",
          defaultMessage: [{ type: 0, value: "Edit permissions" }],
        },
        other_user: {
          id: "label_other_user",
          defaultMessage: [{ type: 0, value: "Other" }],
        },
        clear_messages: {
          id: "action_clear_messages",
          defaultMessage: [{ type: 0, value: "Clear Messages" }],
        },
        clear_messages_warning: {
          id: "clear_messages_warning",
          defaultMessage: [
            {
              type: 0,
              value:
                "Are you sure you want to clear all messages? It cannot be undone.",
            },
          ],
        },
        delete_messages: {
          id: "action_delete_messages",
          defaultMessage: [{ type: 0, value: "Clear Messages for All" }],
        },
        delete_messages_warning: {
          id: "delete_messages_warning",
          defaultMessage: [
            {
              type: 0,
              value:
                "Are you sure you want to delete all messages for everyone? It cannot be undone.",
            },
          ],
        },
        topic_delete: {
          id: "topic_delete",
          defaultMessage: [{ type: 0, value: "Delete Conversation" }],
        },
        topic_delete_warning: {
          id: "topic_delete_warning",
          defaultMessage: [
            {
              type: 0,
              value:
                "Are you sure you want to delete this conversation? It cannot be undone.",
            },
          ],
        },
        leave_chat: {
          id: "action_leave_chat",
          defaultMessage: [{ type: 0, value: "Leave Conversation" }],
        },
        leave_chat_warning: {
          id: "leave_chat_warning",
          defaultMessage: [
            {
              type: 0,
              value: "Are you sure you want to leave this conversation?",
            },
          ],
        },
        block_contact: {
          id: "action_block_contact",
          defaultMessage: [{ type: 0, value: "Block Contact" }],
        },
        block_contact_warning: {
          id: "block_contact_warning",
          defaultMessage: [
            { type: 0, value: "Are you sure you want to block this contact?" },
          ],
        },
        report_chat: {
          id: "action_report_chat",
          defaultMessage: [{ type: 0, value: "Report Conversation" }],
        },
        report_chat_warning: {
          id: "report_chat_warning",
          defaultMessage: [
            {
              type: 0,
              value:
                "Are you sure you want to block and report this conversation?",
            },
          ],
        },
      });
      class we extends n().Component {
        constructor(e) {
          super(e),
            (this.state = {
              topic: null,
              owner: !1,
              admin: !1,
              sharer: !1,
              deleter: !1,
              muted: !1,
              address: null,
              groupTopic: void 0,
              channel: void 0,
              fullName: void 0,
              avatar: null,
              private: null,
              selectedContact: null,
              access: null,
              modeGiven: null,
              modeWant: null,
              modeGiven2: null,
              modeWant2: null,
              auth: null,
              anon: null,
              contactList: [],
              tags: [],
              showMemberPanel: !1,
              showPermissionEditorFor: void 0,
              moreInfoExpanded: !1,
              previousMetaDesc: void 0,
              previousSubsUpdated: void 0,
              previousTagsUpdated: void 0,
            }),
            (this.resetSubs = this.resetSubs.bind(this)),
            (this.resetDesc = this.resetDesc.bind(this)),
            (this.onMetaDesc = this.onMetaDesc.bind(this)),
            (this.onSubsUpdated = this.onSubsUpdated.bind(this)),
            (this.onTagsUpdated = this.onTagsUpdated.bind(this)),
            (this.handleFullNameUpdate = this.handleFullNameUpdate.bind(this)),
            (this.handlePrivateUpdate = this.handlePrivateUpdate.bind(this)),
            (this.handleImageChanged = this.handleImageChanged.bind(this)),
            (this.handleMuted = this.handleMuted.bind(this)),
            (this.handlePermissionsChanged =
              this.handlePermissionsChanged.bind(this)),
            (this.handleLaunchPermissionsEditor =
              this.handleLaunchPermissionsEditor.bind(this)),
            (this.handleHidePermissionsEditor =
              this.handleHidePermissionsEditor.bind(this)),
            (this.handleShowAddMembers = this.handleShowAddMembers.bind(this)),
            (this.handleHideAddMembers = this.handleHideAddMembers.bind(this)),
            (this.handleMemberUpdateRequest =
              this.handleMemberUpdateRequest.bind(this)),
            (this.handleDeleteTopic = this.handleDeleteTopic.bind(this)),
            (this.handleDeleteMessages = this.handleDeleteMessages.bind(this)),
            (this.handleLeave = this.handleLeave.bind(this)),
            (this.handleBlock = this.handleBlock.bind(this)),
            (this.handleReport = this.handleReport.bind(this)),
            (this.handleMemberSelected = this.handleMemberSelected.bind(this)),
            (this.handleMoreInfo = this.handleMoreInfo.bind(this)),
            (this.handleTagsUpdated = this.handleTagsUpdated.bind(this)),
            (this.handleContextMenu = this.handleContextMenu.bind(this));
        }
        componentDidUpdate(e) {
          const t = this.props.tinode.getTopic(e.topic);
          t &&
            (this.onMetaDesc != t.onMetaDesc &&
              ((this.previousMetaDesc = t.onMetaDesc),
              (t.onMetaDesc = this.onMetaDesc),
              (this.previousSubsUpdated = t.onSubsUpdated),
              (t.onSubsUpdated = this.onSubsUpdated),
              "grp" == t.getType()
                ? ((this.previousTagsUpdated = t.onTagsUpdated),
                  (t.onTagsUpdated = this.onTagsUpdated))
                : (this.previousTagsUpdated = void 0)),
            this.state.topic != e.topic &&
              (this.setState({ topic: e.topic }),
              this.resetDesc(t, e),
              this.resetSubs(t, e)));
        }
        componentWillUnmount() {
          const e = this.props.tinode.getTopic(this.props.topic);
          e &&
            (this.setState({ topic: null }),
            (e.onMetaDesc = this.previousMetaDesc),
            (e.onSubsUpdated = this.previousSubsUpdated),
            (e.onTagsUpdated = this.previousTagsUpdated));
        }
        resetSubs(e, t) {
          const s = { contactList: [] };
          if ("p2p" == e.getType()) {
            const a = e.subscriber(t.topic);
            a
              ? ((s.modeGiven2 = a.acs.getGiven()),
                (s.modeWant2 = a.acs.getWant()))
              : ((s.modeGiven2 = "N"), (s.modeWant2 = "N"));
          } else
            e.subscribers((e) => {
              s.contactList.push(e);
            }, this);
          this.setState(s);
        }
        resetDesc(e, t) {
          const s = e.getDefaultAccess() || {},
            a = e.getAccessMode();
          this.setState({
            owner: a && a.isOwner(),
            admin: a && a.isAdmin(),
            sharer: a && a.isSharer(),
            deleter: a && a.isDeleter(),
            muted: a && a.isMuted(),
            fullName: e.public ? e.public.fn : void 0,
            avatar: I(e.public ? e.public.photo : null),
            private: e.private ? e.private.comment : null,
            address: e.name,
            groupTopic: e.isGroupType(),
            channel: e.isChannelType(),
            showMemberPanel: !1,
            access: a ? a.getMode() : void 0,
            modeGiven: a ? a.getGiven() : void 0,
            modeWant: a ? a.getWant() : void 0,
            auth: s.auth,
            anon: s.anon,
          }),
            "grp" == e.getType() &&
              a &&
              a.isOwner() &&
              e.getMeta(e.startMetaQuery().withTags().build());
        }
        onMetaDesc(e) {
          const t = this.props.tinode.getTopic(this.props.topic);
          t &&
            (this.resetDesc(t, this.props),
            this.previousMetaDesc &&
              this.previousMetaDesc != this.onMetaDesc &&
              this.previousMetaDesc(e));
        }
        onSubsUpdated(e) {
          const t = this.props.tinode.getTopic(this.props.topic);
          t &&
            (this.resetSubs(t, this.props),
            this.previousSubsUpdated &&
              this.previousSubsUpdated != this.onSubsUpdated &&
              this.previousSubsUpdated(e));
        }
        onTagsUpdated(e) {
          this.setState({ tags: e }),
            this.previousTagsUpdated &&
              this.previousTagsUpdated != this.onTagsUpdated &&
              this.previousTagsUpdated();
        }
        handleFullNameUpdate(e) {
          (e = e.trim().substring(0, S)),
            this.state.fullName !== e &&
              (this.setState({ fullName: e }),
              this.props.onTopicDescUpdate(this.props.topic, H(e, null), null));
        }
        handlePrivateUpdate(e) {
          (e = e.trim().substring(0, S)),
            this.state.private !== e &&
              (this.setState({ private: e }),
              this.props.onTopicDescUpdate(
                this.props.topic,
                null,
                e || h().DEL_CHAR
              ));
        }
        handleImageChanged(e) {
          this.setState({ avatar: e }),
            this.props.onTopicDescUpdate(
              this.props.topic,
              H(null, e || h().DEL_CHAR),
              null
            );
        }
        handleMuted(e, t) {
          this.setState({ muted: t }),
            this.props.onChangePermissions(this.props.topic, t ? "-P" : "+P");
        }
        handlePermissionsChanged(e) {
          switch (this.state.showPermissionEditorFor) {
            case "auth":
              this.props.onTopicDescUpdate(this.props.topic, null, null, {
                auth: e,
              });
              break;
            case "anon":
              this.props.onTopicDescUpdate(this.props.topic, null, null, {
                anon: e,
              });
              break;
            case "mode":
            case "want":
              this.props.onChangePermissions(this.props.topic, e);
              break;
            case "given":
              this.props.onChangePermissions(
                this.props.topic,
                e,
                this.props.topic
              );
              break;
            case "user":
              this.props.onChangePermissions(
                this.props.topic,
                e,
                this.state.userPermissionsEdited
              );
          }
          this.setState({ showPermissionEditorFor: void 0 });
        }
        handleLaunchPermissionsEditor(e, t) {
          const { formatMessage: s } = this.props.intl;
          let a, n, i, o, l, r, c;
          switch (e) {
            case "mode":
              a = this.state.access;
              break;
            case "want":
              (a = this.state.modeWant),
                (n = this.state.modeGiven),
                this.state.owner
                  ? (i = "O")
                  : ((i = h().AccessMode.encode(
                      h().AccessMode.diff("ASDO", this.state.modeGiven)
                    )),
                    this.state.channel && (i += "W")),
                (o = s(Ee.requested)),
                (l = s(Ee.granted));
              break;
            case "given":
              (a = this.state.modeGiven2),
                (n = this.state.modeWant2),
                (i = this.state.groupTopic
                  ? this.state.owner
                    ? ""
                    : "O"
                  : "ASDO"),
                (o = s(Ee.granted)),
                (l = s(Ee.requested));
              break;
            case "auth":
              (a = this.state.auth), (i = "O");
              break;
            case "anon":
              (a = this.state.anon), (i = "O");
              break;
            case "user": {
              const e = this.props.tinode.getTopic(this.props.topic);
              if (!e) return;
              const d = e.subscriber(t);
              if (!d || !d.acs) return;
              (a = d.acs.getGiven()),
                (n = d.acs.getWant()),
                (i = this.state.owner ? "" : "O"),
                (o = s(Ee.granted)),
                (l = s(Ee.requested)),
                d.public && ((r = d.public.fn), (c = d.public.photo));
              break;
            }
            default:
              console.log("Unknown permission editing mode '" + e + "'");
          }
          this.setState({
            showPermissionEditorFor: e,
            userPermissionsEdited: t,
            userPermissionsTitle: r,
            userPermissionsAvatar: c,
            editedPermissions: a,
            immutablePermissions: n,
            editedPermissionsTitle: o,
            immutablePermissionsTitle: l,
            editedPermissionsSkipped: i,
          });
        }
        handleHidePermissionsEditor() {
          this.setState({ showPermissionEditorFor: void 0 });
        }
        handleShowAddMembers(e) {
          e.preventDefault(),
            this.props.onInitFind(),
            this.setState({ showMemberPanel: !0 });
        }
        handleHideAddMembers() {
          this.setState({ showMemberPanel: !1 });
        }
        handleMemberUpdateRequest(e, t, s) {
          this.props.onMemberUpdateRequest(this.props.topic, t, s),
            this.setState({ showMemberPanel: !1 });
        }
        handleDeleteTopic(e) {
          e.preventDefault();
          const { formatMessage: t } = this.props.intl;
          this.props.onShowAlert(
            t(Ee.topic_delete),
            t(Ee.topic_delete_warning),
            () => {
              this.props.onDeleteTopic(this.props.topic);
            },
            null,
            !0,
            null
          );
        }
        handleDeleteMessages(e) {
          e.preventDefault();
          const { formatMessage: t } = this.props.intl;
          this.props.onShowAlert(
            t(this.state.deleter ? Ee.delete_messages : Ee.clear_messages),
            t(
              this.state.deleter
                ? Ee.delete_messages_warning
                : Ee.clear_messages_warning
            ),
            () => {
              this.props.onDeleteMessages(this.props.topic);
            },
            null,
            !0,
            null
          );
        }
        handleLeave(e) {
          e.preventDefault();
          const { formatMessage: t } = this.props.intl;
          this.props.onShowAlert(
            t(Ee.leave_chat),
            t(Ee.leave_chat_warning),
            () => {
              this.props.onLeaveTopic(this.props.topic);
            },
            null,
            !0,
            null
          );
        }
        handleBlock(e) {
          e.preventDefault();
          const { formatMessage: t } = this.props.intl;
          this.props.onShowAlert(
            t(Ee.block_contact),
            t(Ee.block_contact_warning),
            () => {
              this.props.onBlockTopic(this.props.topic);
            },
            null,
            !0,
            null
          );
        }
        handleReport(e) {
          e.preventDefault();
          const { formatMessage: t } = this.props.intl;
          this.props.onShowAlert(
            t(Ee.report_chat),
            t(Ee.report_chat_warning),
            () => {
              this.props.onReportTopic(this.props.topic);
            },
            null,
            !0,
            null
          );
        }
        handleMemberSelected(e) {
          this.setState({ selectedContact: e });
        }
        handleMoreInfo(e) {
          this.setState({ moreInfoExpanded: e });
        }
        handleTagsUpdated(e) {
          K(this.state.tags.slice(0), e.slice(0)) ||
            this.props.onTopicTagsUpdate(this.props.topic, e);
        }
        handleContextMenu(e) {
          const { formatMessage: t } = this.props.intl,
            s = this,
            a = this.props.tinode.getTopic(this.props.topic);
          if (!a) return;
          const n = a.subscriber(e.topicName);
          if (!n || !n.acs) return;
          const i = [
            {
              title: t(Ee.edit_permissions),
              handler: function () {
                s.handleLaunchPermissionsEditor("user", e.topicName);
              },
            },
            "member_delete",
            n.acs.isMuted() ? "member_unmute" : "member_mute",
            n.acs.isJoiner() ? "member_block" : "member_unblock",
          ];
          this.props.showContextMenu(
            { topicName: this.props.topic, x: e.x, y: e.y, user: e.topicName },
            i
          );
        }
        render() {
          const { formatMessage: e } = this.props.intl;
          return n().createElement(
            "div",
            { id: "info-view" },
            n().createElement(
              "div",
              { className: "caption-panel", id: "info-caption-panel" },
              n().createElement(
                "div",
                { className: "panel-title", id: "info-title" },
                n().createElement(l.FormattedMessage, {
                  id: "title_info",
                  defaultMessage: [{ type: 0, value: "Info" }],
                })
              ),
              n().createElement(
                "div",
                null,
                n().createElement(oe, { onCancel: this.props.onCancel })
              )
            ),
            this.props.displayMobile
              ? n().createElement(le, {
                  level: this.props.errorLevel,
                  text: this.props.errorText,
                  onClearError: this.props.onError,
                })
              : null,
            this.state.showMemberPanel
              ? n().createElement(pe, {
                  members: this.state.contactList,
                  requiredMember: this.props.myUserId,
                  keepInitialMembers: !this.state.admin && !this.state.owner,
                  myUserId: this.props.myUserId,
                  contacts: this.props.searchableContacts,
                  onCancel: this.handleHideAddMembers,
                  onSubmit: this.handleMemberUpdateRequest,
                })
              : this.state.showPermissionEditorFor
              ? n().createElement(ve, {
                  mode: this.state.editedPermissions,
                  compare: this.state.immutablePermissions,
                  skip: this.state.editedPermissionsSkipped,
                  modeTitle: this.state.editedPermissionsTitle,
                  compareTitle: this.state.immutablePermissionsTitle,
                  userTitle: this.state.userPermissionsTitle,
                  item: this.state.userPermissionsEdited,
                  userAvatar: this.state.userPermissionsAvatar,
                  onSubmit: this.handlePermissionsChanged,
                  onCancel: this.handleHidePermissionsEditor,
                })
              : n().createElement(
                  "div",
                  { id: "info-view-content", className: "scrollable-panel" },
                  n().createElement(
                    "div",
                    { className: "panel-form-row" },
                    n().createElement(
                      "div",
                      { className: "panel-form-column" },
                      n().createElement(
                        "div",
                        null,
                        n().createElement(
                          "label",
                          { className: "small" },
                          n().createElement(l.FormattedMessage, {
                            id: "label_topic_name",
                            defaultMessage: [{ type: 0, value: "Name" }],
                          })
                        )
                      ),
                      n().createElement(
                        "div",
                        null,
                        n().createElement(ue, {
                          placeholder: this.state.groupTopic
                            ? "Group name"
                            : n().createElement("i", null, "Unknown"),
                          readOnly: !this.state.owner,
                          value: this.state.fullName,
                          required: !0,
                          onFinished: this.handleFullNameUpdate,
                        })
                      ),
                      n().createElement(
                        "div",
                        null,
                        n().createElement(
                          "label",
                          { className: "small" },
                          n().createElement(l.FormattedMessage, {
                            id: "label_private",
                            defaultMessage: [
                              { type: 0, value: "Private comment" },
                            ],
                          })
                        )
                      ),
                      n().createElement(
                        "div",
                        null,
                        n().createElement(
                          l.FormattedMessage,
                          {
                            id: "private_editing_placeholder",
                            defaultMessage: [
                              { type: 0, value: "Visible to you only" },
                            ],
                          },
                          (e) =>
                            n().createElement(ue, {
                              placeholder: e,
                              value: this.state.private,
                              onFinished: this.handlePrivateUpdate,
                            })
                        )
                      )
                    ),
                    n().createElement(q, {
                      avatar: this.state.avatar,
                      readOnly: !this.state.owner,
                      uid: this.props.topic,
                      title: this.state.fullName,
                      onImageChanged: this.handleImageChanged,
                      onError: this.props.onError,
                    })
                  ),
                  n().createElement("div", { className: "hr" }),
                  n().createElement(
                    "div",
                    { className: "panel-form-column" },
                    n().createElement(
                      "div",
                      { className: "panel-form-row" },
                      n().createElement(
                        "label",
                        null,
                        n().createElement(l.FormattedMessage, {
                          id: "label_muting_topic",
                          defaultMessage: [{ type: 0, value: "Muted:" }],
                        })
                      ),
                      n().createElement(z, {
                        name: "P",
                        checked: this.state.muted,
                        onChange: this.handleMuted,
                      })
                    ),
                    n().createElement(
                      l.FormattedMessage,
                      {
                        id: "action_more",
                        defaultMessage: [{ type: 0, value: "More" }],
                      },
                      (e) =>
                        n().createElement(_e, {
                          title: e,
                          open: this.state.moreInfoExpanded,
                          onToggle: this.handleMoreInfo,
                        })
                    ),
                    this.state.moreInfoExpanded
                      ? n().createElement(
                          "div",
                          { className: "panel-form-column" },
                          n().createElement(
                            "div",
                            { className: "panel-form-row" },
                            n().createElement(
                              "label",
                              null,
                              n().createElement(l.FormattedMessage, {
                                id: "label_user_id",
                                defaultMessage: [{ type: 0, value: "ID:" }],
                              })
                            ),
                            n().createElement("tt", null, this.state.address)
                          ),
                          this.state.groupTopic
                            ? n().createElement(
                                "div",
                                { className: "panel-form-row" },
                                n().createElement(
                                  "label",
                                  null,
                                  n().createElement(l.FormattedMessage, {
                                    id: "label_your_permissions",
                                    defaultMessage: [
                                      { type: 0, value: "Your permissions:" },
                                    ],
                                  })
                                ),
                                n().createElement(
                                  "tt",
                                  {
                                    className: "clickable",
                                    onClick:
                                      this.handleLaunchPermissionsEditor.bind(
                                        this,
                                        "want"
                                      ),
                                  },
                                  this.state.access
                                )
                              )
                            : n().createElement(
                                "div",
                                null,
                                n().createElement(
                                  "div",
                                  null,
                                  n().createElement(
                                    "label",
                                    { className: "small" },
                                    n().createElement(l.FormattedMessage, {
                                      id: "label_permissions",
                                      defaultMessage: [
                                        { type: 0, value: "Permissions:" },
                                      ],
                                    })
                                  )
                                ),
                                n().createElement(
                                  "div",
                                  { className: "quoted" },
                                  n().createElement(
                                    "div",
                                    null,
                                    n().createElement(l.FormattedMessage, {
                                      id: "label_you",
                                      defaultMessage: [
                                        { type: 0, value: "You:" },
                                      ],
                                    }),
                                    "  ",
                                    n().createElement(
                                      "tt",
                                      {
                                        className: "clickable",
                                        onClick:
                                          this.handleLaunchPermissionsEditor.bind(
                                            this,
                                            "want"
                                          ),
                                      },
                                      this.state.access
                                    )
                                  ),
                                  n().createElement(
                                    "div",
                                    null,
                                    this.state.fullName
                                      ? this.state.fullName
                                      : e(Ee.other_user),
                                    ":  ",
                                    n().createElement(
                                      "tt",
                                      {
                                        className: "clickable",
                                        onClick:
                                          this.handleLaunchPermissionsEditor.bind(
                                            this,
                                            "given"
                                          ),
                                      },
                                      this.state.modeGiven2
                                    )
                                  )
                                )
                              ),
                          this.state.sharer &&
                            (this.state.auth || this.state.anon)
                            ? n().createElement(
                                "div",
                                null,
                                n().createElement(
                                  "div",
                                  null,
                                  n().createElement(
                                    "label",
                                    { className: "small" },
                                    n().createElement(l.FormattedMessage, {
                                      id: "label_default_access",
                                      defaultMessage: [
                                        {
                                          type: 0,
                                          value: "Default access mode:",
                                        },
                                      ],
                                    })
                                  )
                                ),
                                n().createElement(
                                  "div",
                                  { className: "quoted" },
                                  n().createElement(
                                    "div",
                                    null,
                                    "Auth: ",
                                    this.state.admin
                                      ? n().createElement(
                                          "tt",
                                          {
                                            className: "clickable",
                                            onClick:
                                              this.handleLaunchPermissionsEditor.bind(
                                                this,
                                                "auth"
                                              ),
                                          },
                                          this.state.auth
                                        )
                                      : n().createElement(
                                          "tt",
                                          null,
                                          this.state.auth
                                        )
                                  ),
                                  n().createElement(
                                    "div",
                                    null,
                                    "Anon: ",
                                    this.state.admin
                                      ? n().createElement(
                                          "tt",
                                          {
                                            className: "clickable",
                                            onClick:
                                              this.handleLaunchPermissionsEditor.bind(
                                                this,
                                                "anon"
                                              ),
                                          },
                                          this.state.anon
                                        )
                                      : n().createElement(
                                          "tt",
                                          null,
                                          this.state.anon
                                        )
                                  )
                                )
                              )
                            : null
                        )
                      : null
                  ),
                  n().createElement("div", { className: "hr" }),
                  this.state.owner
                    ? n().createElement(
                        n().Fragment,
                        null,
                        n().createElement(
                          l.FormattedMessage,
                          {
                            id: "title_tag_manager",
                            defaultMessage: [
                              { type: 0, value: "Tags (user discovery)" },
                            ],
                          },
                          (e) =>
                            n().createElement(fe, {
                              title: e,
                              tags: this.state.tags,
                              activated: !1,
                              tinode: this.props.tinode,
                              onSubmit: this.handleTagsUpdated,
                            })
                        ),
                        n().createElement("div", { className: "hr" })
                      )
                    : null,
                  n().createElement(
                    "div",
                    { className: "panel-form-column" },
                    this.state.channel
                      ? null
                      : n().createElement(
                          "a",
                          {
                            href: "#",
                            className: "flat-button",
                            onClick: this.handleDeleteMessages,
                          },
                          n().createElement(
                            "i",
                            { className: "material-icons" },
                            "delete_outline"
                          ),
                          "  ",
                          e(
                            this.state.deleter
                              ? Ee.delete_messages
                              : Ee.clear_messages
                          )
                        ),
                    this.state.owner
                      ? n().createElement(
                          "a",
                          {
                            href: "#",
                            className: "danger flat-button",
                            onClick: this.handleDeleteTopic,
                          },
                          n().createElement(
                            "i",
                            { className: "material-icons" },
                            "delete"
                          ),
                          "  ",
                          e(Ee.topic_delete)
                        )
                      : n().createElement(
                          "a",
                          {
                            href: "#",
                            className: "danger flat-button",
                            onClick: this.handleLeave,
                          },
                          n().createElement(
                            "i",
                            { className: "material-icons" },
                            "exit_to_app"
                          ),
                          "  ",
                          e(Ee.leave_chat)
                        ),
                    this.state.groupTopic
                      ? null
                      : n().createElement(
                          "a",
                          {
                            href: "#",
                            className: "danger flat-button",
                            onClick: this.handleBlock,
                          },
                          n().createElement(
                            "i",
                            { className: "material-icons" },
                            "block"
                          ),
                          "  ",
                          e(Ee.block_contact)
                        ),
                    this.state.owner
                      ? null
                      : n().createElement(
                          "a",
                          {
                            href: "#",
                            className: "danger flat-button",
                            onClick: this.handleReport,
                          },
                          n().createElement(
                            "i",
                            { className: "material-icons" },
                            "report"
                          ),
                          "  ",
                          e(Ee.report_chat)
                        )
                  ),
                  this.state.groupTopic && this.state.sharer
                    ? n().createElement(
                        n().Fragment,
                        null,
                        n().createElement("div", { className: "hr" }),
                        n().createElement(
                          "div",
                          { className: "panel-form-column" },
                          n().createElement(
                            "div",
                            { className: "panel-form-row" },
                            n().createElement(
                              "label",
                              { className: "small" },
                              n().createElement(l.FormattedMessage, {
                                id: "label_group_members",
                                defaultMessage: [
                                  { type: 0, value: "Group members:" },
                                ],
                              })
                            )
                          ),
                          n().createElement(
                            "div",
                            { className: "panel-form-row" },
                            n().createElement(
                              "a",
                              {
                                href: "#",
                                className: "flat-button",
                                onClick: this.handleShowAddMembers,
                              },
                              n().createElement(
                                "i",
                                { className: "material-icons" },
                                "person_add"
                              ),
                              "  ",
                              n().createElement(l.FormattedMessage, {
                                id: "button_add_members",
                                defaultMessage: [
                                  { type: 0, value: "Add members" },
                                ],
                              })
                            )
                          ),
                          n().createElement(
                            l.FormattedMessage,
                            {
                              id: "group_has_no_members",
                              defaultMessage: [
                                { type: 0, value: "No members" },
                              ],
                            },
                            (e) =>
                              n().createElement(ie, {
                                contacts: this.state.contactList,
                                myUserId: this.props.myUserId,
                                emptyListMessage: e,
                                topicSelected: this.state.selectedContact,
                                showOnline: !1,
                                showUnread: !1,
                                showMode: !0,
                                noScroll: !0,
                                onTopicSelected: this.handleMemberSelected,
                                showContextMenu:
                                  !!this.state.admin && this.handleContextMenu,
                              })
                          )
                        )
                      )
                    : null
                )
          );
        }
      }
      const Ce = (0, l.injectIntl)(we);
      class ye extends n().PureComponent {
        render() {
          return n().createElement(
            "div",
            { className: "uploader" },
            n().createElement(
              "div",
              null,
              n().createElement("span", {
                style: { width: 100 * this.props.progress + "%" },
              })
            ),
            this.props.progress < 0.999
              ? n().createElement(
                  "a",
                  {
                    href: "#",
                    onClick: (e) => {
                      e.preventDefault(), this.props.onCancel();
                    },
                  },
                  n().createElement(
                    "i",
                    { className: "material-icons" },
                    "close"
                  ),
                  " ",
                  n().createElement(l.FormattedMessage, {
                    id: "action_cancel",
                    defaultMessage: [{ type: 0, value: "cancel" }],
                  })
                )
              : n().createElement(l.FormattedMessage, {
                  id: "upload_finishing",
                  defaultMessage: [{ type: 0, value: "finishing..." }],
                })
          );
        }
      }
      class Se extends n().Component {
        constructor(e) {
          super(e),
            (this.state = { downloader: null, progress: 0 }),
            (this.downloadFile = this.downloadFile.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this));
        }
        downloadFile(e, t, s) {
          if (!e)
            return void this.props.onError("Invalid download URL '" + e + "'");
          const a = this.props.tinode.getLargeFileHelper();
          this.setState({ downloader: a }),
            a
              .download(
                e,
                t,
                s,
                (e) => {
                  this.setState({ progress: e / this.props.size });
                },
                (e) => {
                  this.props.onError(e, "err");
                }
              )
              .then(() => {
                this.setState({ downloader: null, progress: 0 });
              })
              .catch((e) => {
                e &&
                  this.props.onError(
                    "Error downloading file: " + e.message,
                    "err"
                  ),
                  this.setState({ downloader: null, progress: 0 });
              });
        }
        handleCancel() {
          this.props.uploading
            ? this.props.onCancelUpload()
            : this.state.downloader && this.state.downloader.cancel();
        }
        render() {
          let e = this.props.filename || "file_attachment";
          e.length > 36 && (e = e.substr(0, 16) + "..." + e.substr(-16));
          let t,
            s,
            a =
              this.props.size > 0
                ? n().createElement(
                    "span",
                    { className: "small gray" },
                    "(",
                    A(this.props.size),
                    ")"
                  )
                : null;
          this.props.uploading ||
          this.state.downloader ||
          !(function (e) {
            return e && !/^\s*([a-z][a-z0-9+.-]*:|\/\/)/im.test(e);
          })(this.props.downloadUrl)
            ? ((t = W(this.props.downloadUrl)), (s = null))
            : ((t = "#"),
              (s = (e) => {
                e.preventDefault(),
                  this.downloadFile(
                    this.props.downloadUrl,
                    this.props.filename,
                    this.props.mimetype
                  );
              }));
          const i = n().createElement(
            n().Fragment,
            null,
            n().createElement(
              "i",
              { className: "material-icons" },
              "file_download"
            ),
            " ",
            n().createElement(l.FormattedMessage, {
              id: "save_attachment",
              defaultMessage: [{ type: 0, value: "save" }],
            })
          );
          return n().createElement(
            "div",
            { className: "attachment" },
            n().createElement(
              "div",
              null,
              n().createElement(
                "i",
                { className: "material-icons big gray" },
                "insert_drive_file"
              )
            ),
            n().createElement(
              "div",
              { className: "flex-column" },
              n().createElement("div", null, e, " ", a),
              this.props.uploading || this.state.downloader
                ? n().createElement(ye, {
                    progress: this.props.uploading
                      ? this.props.progress
                      : this.state.progress,
                    onCancel: this.handleCancel,
                  })
                : n().createElement(
                    "div",
                    null,
                    t
                      ? n().createElement(
                          "a",
                          {
                            href: t,
                            download: this.props.filename,
                            onClick: s,
                          },
                          i
                        )
                      : n().createElement(
                          "span",
                          { className: "light-gray" },
                          i
                        )
                  )
            )
          );
        }
      }
      class Me extends n().PureComponent {
        constructor(e) {
          super(e);
        }
        render() {
          return n().createElement(
            "div",
            { className: "inline-image" },
            n().createElement("img", this.props),
            n().createElement(
              "div",
              { className: "rounded-container" },
              n().createElement(ye, {
                progress: this.props.progress,
                onCancel: this.props.onCancelUpload,
              })
            )
          );
        }
      }
      class ke extends n().Component {
        constructor(e) {
          super(e),
            (this.state = { progress: 0 }),
            e.uploader &&
              (e.uploader.onProgress = this.handleProgress.bind(this)),
            (this.handleImagePreview = this.handleImagePreview.bind(this)),
            (this.handleFormButtonClick =
              this.handleFormButtonClick.bind(this)),
            (this.handleContextClick = this.handleContextClick.bind(this)),
            (this.handleCancelUpload = this.handleCancelUpload.bind(this));
        }
        handleImagePreview(e) {
          e.preventDefault(),
            this.props.onImagePreview({
              url: e.target.src,
              filename: e.target.title,
              width: e.target.dataset.width,
              height: e.target.dataset.height,
              size: e.target.dataset.size,
              type: e.target.dataset.mime,
            });
        }
        handleFormButtonClick(e) {
          e.preventDefault();
          const t = { seq: this.props.seq, resp: {} };
          e.target.dataset.name &&
            (t.resp[e.target.dataset.name] = e.target.dataset.val
              ? e.target.dataset.val
              : void 0 === e.target.dataset.val
              ? 1
              : "" + e.target.dataset.val),
            "url" == e.target.dataset.act &&
              (t.ref = W(e.target.dataset.ref) || "about:blank");
          const s = e.target.dataset.title || "unknown";
          this.props.onFormResponse(e.target.dataset.act, s, t);
        }
        handleContextClick(e) {
          e.preventDefault(), e.stopPropagation();
          const t =
            this.props.received == Tinode.MESSAGE_STATUS_FAILED
              ? ["menu_item_send_retry"]
              : [];
          this.props.showContextMenu(
            {
              seq: this.props.seq,
              content: this.props.content,
              y: e.pageY,
              x: e.pageX,
            },
            t
          );
        }
        handleProgress(e) {
          this.setState({ progress: e });
        }
        handleCancelUpload() {
          this.props.onCancelUpload(this.props.seq, this.props.uploader);
        }
        render() {
          const e = this.props.deleted
              ? "center"
              : this.props.sequence +
                " " +
                (this.props.response ? "left" : "right"),
            t =
              "single" == this.props.sequence || "last" == this.props.sequence
                ? "bubble tip"
                : "bubble",
            s = this.props.deleted ? null : this.props.userAvatar || !0,
            a =
              this.props.userFrom &&
              this.props.response &&
              !this.props.deleted &&
              ("single" == this.props.sequence ||
                "last" == this.props.sequence);
          let i = this.props.content;
          const o = [];
          return (
            this.props.mimeType == d.Drafty.getContentType() &&
            d.Drafty.isValid(i)
              ? (d.Drafty.attachments(
                  i,
                  function (e, t) {
                    "application/json" != e.mime &&
                      o.push(
                        n().createElement(Se, {
                          tinode: this.props.tinode,
                          downloadUrl: d.Drafty.getDownloadUrl(e),
                          filename: e.name,
                          uploading: d.Drafty.isProcessing(e),
                          mimetype: e.mime,
                          size: d.Drafty.getEntitySize(e),
                          progress: this.state.progress,
                          onCancelUpload: this.handleCancelUpload,
                          onError: this.props.onError,
                          key: t,
                        })
                      );
                  },
                  this
                ),
                (i = n().createElement(
                  n().Fragment,
                  null,
                  d.Drafty.format(i, Te, this)
                )))
              : this.props.deleted
              ? (i = n().createElement(
                  n().Fragment,
                  null,
                  n().createElement(
                    "i",
                    { className: "material-icons gray" },
                    "block"
                  ),
                  " ",
                  n().createElement(
                    "i",
                    { className: "gray" },
                    n().createElement(l.FormattedMessage, {
                      id: "deleted_content",
                      defaultMessage: [{ type: 0, value: "content deleted" }],
                    })
                  )
                ))
              : "string" != typeof i &&
                (i = n().createElement(
                  n().Fragment,
                  null,
                  n().createElement(
                    "i",
                    { className: "material-icons gray" },
                    "error_outline"
                  ),
                  " ",
                  n().createElement(
                    "i",
                    { className: "gray" },
                    n().createElement(l.FormattedMessage, {
                      id: "invalid_content",
                      defaultMessage: [{ type: 0, value: "invalid content" }],
                    })
                  )
                )),
            n().createElement(
              "li",
              { className: e },
              this.props.userFrom && this.props.response
                ? n().createElement(
                    "div",
                    { className: "avatar-box" },
                    a
                      ? n().createElement(P, {
                          topic: this.props.userFrom,
                          title: this.props.userName,
                          avatar: s,
                        })
                      : null
                  )
                : null,
              n().createElement(
                "div",
                null,
                n().createElement(
                  "div",
                  { className: t },
                  n().createElement(
                    "div",
                    { className: "content-meta" },
                    n().createElement(
                      "div",
                      { className: "message-content" },
                      i,
                      o
                    ),
                    this.props.timestamp
                      ? n().createElement(Q, {
                          timestamp: this.props.timestamp,
                          received: this.props.received,
                        })
                      : null
                  ),
                  this.props.deleted || !this.props.showContextMenu
                    ? null
                    : n().createElement(
                        "span",
                        { className: "menuTrigger" },
                        n().createElement(
                          "a",
                          { href: "#", onClick: this.handleContextClick },
                          n().createElement(
                            "i",
                            { className: "material-icons" },
                            "expand_more"
                          )
                        )
                      )
                ),
                a
                  ? n().createElement(
                      "div",
                      { className: "author" },
                      n().createElement(
                        l.FormattedMessage,
                        {
                          id: "user_not_found",
                          defaultMessage: [{ type: 0, value: "Not found" }],
                        },
                        (e) =>
                          this.props.userName || n().createElement("i", null, e)
                      )
                    )
                  : null
              )
            )
          );
        }
      }
      function Te(e, t, s, a) {
        if ("EX" == e) return null;
        let i = d.Drafty.tagName(e);
        if (i) {
          const o = d.Drafty.attrValue(e, t) || {};
          switch (((o.key = a), e)) {
            case "HL":
              o.className = "highlight";
              break;
            case "IM":
              if (t) {
                o.className = "inline-image";
                const e = U(
                  t.width,
                  t.height,
                  Math.min(this.props.viewportWidth - 84.5, 448.5),
                  312,
                  !1
                ) || { dstWidth: 32, dstHeight: 32 };
                (o.style = {
                  width: e.dstWidth + "px",
                  height: e.dstHeight + "px",
                  minWidth: e.dstWidth + "px",
                  minHeight: e.dstHeight + "px",
                }),
                  d.Drafty.isProcessing(t)
                    ? (i = Me)
                    : ((o.src = this.props.tinode.authorizeURL(
                        (function (e) {
                          if (!e) return null;
                          return (
                            W(e) ||
                            (/data:image\/[a-z0-9.-]+;base64,/i.test(e.trim())
                              ? e
                              : null)
                          );
                        })(o.src)
                      )),
                      (o.alt = t.name),
                      o.src
                        ? ((o.onClick = this.handleImagePreview),
                          (o.className += " image-clickable"),
                          (o.loading = "lazy"))
                        : (o.src = "img/broken_image.png"));
              }
              break;
            case "BN":
              o.onClick = this.handleFormButtonClick;
              let e = n().Children.map(s, (e) =>
                "string" == typeof e ? e : void 0
              );
              (e && 0 != e.length) || (e = [o.name]),
                (o["data-title"] = e.join(""));
              break;
            case "FM":
              o.className = "bot-form";
              break;
            case "RW":
              break;
            default:
              "_UNKN" == i &&
                (i = n().createElement(
                  n().Fragment,
                  null,
                  n().createElement(
                    "span",
                    { className: "material-icons" },
                    "extension"
                  )
                ));
          }
          return n().createElement(i, o, s);
        }
        return s;
      }
      const Ne = (0, l.defineMessages)({
        messaging_disabled: {
          id: "messaging_disabled_prompt",
          defaultMessage: [{ type: 0, value: "Messaging disabled" }],
        },
        type_new_message: {
          id: "new_message_prompt",
          defaultMessage: [{ type: 0, value: "New message" }],
        },
        add_image_caption: {
          id: "image_caption_prompt",
          defaultMessage: [{ type: 0, value: "Image caption" }],
        },
        file_attachment_too_large: {
          id: "file_attachment_too_large",
          defaultMessage: [
            { type: 0, value: "The file size " },
            { type: 1, value: "size" },
            { type: 0, value: " exceeds the " },
            { type: 1, value: "limit" },
            { type: 0, value: " limit." },
          ],
        },
        cannot_initiate_upload: {
          id: "cannot_initiate_file_upload",
          defaultMessage: [{ type: 0, value: "Cannot initiate file upload." }],
        },
      });
      class Ae extends n().PureComponent {
        constructor(e) {
          super(e),
            (this.state = {
              message: "",
              keypressTimestamp: new Date().getTime() - b - 1,
            }),
            (this.handlePasteEvent = this.handlePasteEvent.bind(this)),
            (this.handleAttachImage = this.handleAttachImage.bind(this)),
            (this.handleAttachFile = this.handleAttachFile.bind(this)),
            (this.handleSend = this.handleSend.bind(this)),
            (this.handleKeyPress = this.handleKeyPress.bind(this)),
            (this.handleMessageTyping = this.handleMessageTyping.bind(this));
        }
        componentDidMount() {
          this.messageEditArea &&
            this.messageEditArea.addEventListener(
              "paste",
              this.handlePasteEvent,
              !1
            );
        }
        componentWillUnmount() {
          this.messageEditArea &&
            this.messageEditArea.removeEventListener(
              "paste",
              this.handlePasteEvent,
              !1
            );
        }
        componentDidUpdate() {
          this.messageEditArea && this.messageEditArea.focus();
        }
        handlePasteEvent(e) {
          this.props.disabled ||
            ((function (e, t, s, a) {
              var n = (e.clipboardData || e.originalEvent.clipboardData || {})
                .items;
              for (var i in n) {
                var o = n[i];
                if ("file" === o.kind) {
                  var l = o.getAsFile();
                  if (!l) {
                    console.log(
                      "Failed to get file object from pasted file item",
                      o.kind,
                      o.type
                    );
                    continue;
                  }
                  return (
                    l.type && "image" == l.type.split("/")[0]
                      ? l.size > w || D.indexOf(l.type) < 0
                        ? imageFileScaledToBase64(l, y, y, !1, t, a)
                        : imageFileToBase64(l, t, a)
                      : R(l, s),
                    !0
                  );
                }
              }
              return !1;
            })(
              e,
              (e, t, s, a, n) => {
                this.props.onAttachImage(t, e, s, a, n);
              },
              (e, t, s) => {
                this.props.onAttachFile(e, t, s);
              },
              this.props.onError
            ) &&
              e.preventDefault());
        }
        handleAttachImage(e) {
          e.target.files &&
            e.target.files.length > 0 &&
            this.props.onAttachImage(e.target.files[0]),
            (e.target.value = "");
        }
        handleAttachFile(e) {
          const { formatMessage: t } = this.props.intl;
          e.target.files &&
            e.target.files.length > 0 &&
            this.props.onAttachFile(e.target.files[0]),
            (e.target.value = "");
        }
        handleSend(e) {
          e.preventDefault();
          const t = this.state.message.trim();
          (t || this.props.acceptBlank || this.props.noInput) &&
            (this.props.onSendMessage(t), this.setState({ message: "" }));
        }
        handleKeyPress(e) {
          "Enter" === e.key &&
            (e.shiftKey ||
              (e.preventDefault(), e.stopPropagation(), this.handleSend(e)));
        }
        handleMessageTyping(e) {
          const t = { message: e.target.value };
          if (this.props.onKeyPress) {
            const e = new Date().getTime();
            e - this.state.keypressTimestamp > b &&
              (this.props.onKeyPress(), (t.keypressTimestamp = e));
          }
          this.setState(t);
        }
        render() {
          const { formatMessage: e } = this.props.intl,
            t = this.props.disabled
              ? e(Ne.messaging_disabled)
              : this.props.messagePrompt
              ? e(Ne[this.props.messagePrompt])
              : e(Ne.type_new_message);
          return n().createElement(
            "div",
            { id: "send-message-panel" },
            this.props.disabled
              ? n().createElement("div", { id: "writing-disabled" }, t)
              : n().createElement(
                  n().Fragment,
                  null,
                  this.props.onAttachFile
                    ? n().createElement(
                        n().Fragment,
                        null,
                        n().createElement(
                          "a",
                          {
                            href: "#",
                            onClick: (e) => {
                              e.preventDefault(), this.attachImage.click();
                            },
                            title: "Add image",
                          },
                          n().createElement(
                            "i",
                            { className: "material-icons secondary" },
                            "photo"
                          )
                        ),
                        n().createElement(
                          "a",
                          {
                            href: "#",
                            onClick: (e) => {
                              e.preventDefault(), this.attachFile.click();
                            },
                            title: "Attach file",
                          },
                          n().createElement(
                            "i",
                            { className: "material-icons secondary" },
                            "attach_file"
                          )
                        )
                      )
                    : null,
                  this.props.noInput
                    ? n().createElement("div", { className: "hr thin" })
                    : n().createElement("textarea", {
                        id: "sendMessage",
                        placeholder: t,
                        value: this.state.message,
                        onChange: this.handleMessageTyping,
                        onKeyPress: this.handleKeyPress,
                        ref: (e) => {
                          this.messageEditArea = e;
                        },
                        autoFocus: !0,
                      }),
                  n().createElement(
                    "a",
                    { href: "#", onClick: this.handleSend, title: "Send" },
                    n().createElement(
                      "i",
                      { className: "material-icons" },
                      "send"
                    )
                  ),
                  n().createElement("input", {
                    type: "file",
                    ref: (e) => {
                      this.attachFile = e;
                    },
                    onChange: this.handleAttachFile,
                    style: { display: "none" },
                  }),
                  n().createElement("input", {
                    type: "file",
                    ref: (e) => {
                      this.attachImage = e;
                    },
                    accept: "image/*",
                    onChange: this.handleAttachImage,
                    style: { display: "none" },
                  })
                )
          );
        }
      }
      const Pe = (0, l.injectIntl)(Ae);
      class De extends n().PureComponent {
        constructor(e) {
          super(e), (this.handleSendDoc = this.handleSendDoc.bind(this));
        }
        handleSendDoc(e) {
          this.props.onClose(),
            this.props.onSendMessage(this.props.content.file);
        }
        render() {
          return this.props.content
            ? n().createElement(
                "div",
                { id: "image-preview" },
                n().createElement(
                  "div",
                  { id: "image-preview-caption-panel" },
                  n().createElement("span", null, this.props.content.filename),
                  n().createElement(
                    "a",
                    {
                      href: "#",
                      onClick: (e) => {
                        e.preventDefault(), this.props.onClose();
                      },
                    },
                    n().createElement(
                      "i",
                      { className: "material-icons gray" },
                      "close"
                    )
                  )
                ),
                n().createElement(
                  "div",
                  { id: "image-preview-container" },
                  n().createElement(
                    "div",
                    { className: "flex-column narrow" },
                    n().createElement(
                      "i",
                      { className: "material-icons gray" },
                      (function (e) {
                        const t = {
                          default: "insert_drive_file",
                          image: "image",
                          text: "description",
                          video: "theaters",
                        };
                        return t[e] || t[(e || "").split("/")[0]] || t.default;
                      })(this.props.content.type)
                    ),
                    n().createElement(
                      "div",
                      null,
                      n().createElement(
                        "b",
                        null,
                        n().createElement(l.FormattedMessage, {
                          id: "label_content_type",
                          defaultMessage: [{ type: 0, value: "Content type:" }],
                        })
                      ),
                      " ",
                      this.props.content.type || "application/octet-stream"
                    ),
                    n().createElement(
                      "div",
                      null,
                      n().createElement(
                        "b",
                        null,
                        n().createElement(l.FormattedMessage, {
                          id: "label_size",
                          defaultMessage: [{ type: 0, value: "Size:" }],
                        })
                      ),
                      " ",
                      A(this.props.content.size)
                    )
                  )
                ),
                n().createElement(Pe, {
                  noInput: !0,
                  onSendMessage: this.handleSendDoc,
                  onError: this.props.onError,
                })
              )
            : null;
        }
      }
      class Fe extends n().Component {
        constructor(e) {
          super(e);
        }
        render() {
          const e = [],
            t = (this.props.subscribers || []).length,
            s = Math.min(4, t);
          return (
            (this.props.subscribers || []).some(
              (t) => (
                e.push(
                  n().createElement(
                    "div",
                    { className: "avatar-box", key: t.user },
                    n().createElement(P, {
                      topic: t.user,
                      avatar: I(t.public ? t.public.photo : null) || !0,
                      title: t.public ? t.public.fn : null,
                    })
                  )
                ),
                e.length == s
              )
            ),
            n().createElement(
              "div",
              { id: "topic-users" },
              e,
              " ",
              t > s
                ? n().createElement(
                    "span",
                    null,
                    n().createElement(l.FormattedMessage, {
                      id: "more_online_members",
                      defaultMessage: [
                        { type: 0, value: "+" },
                        { type: 1, value: "overflow" },
                        { type: 0, value: " more" },
                      ],
                      values: { overflow: t - s },
                    })
                  )
                : null
            )
          );
        }
      }
      class Ie extends n().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { width: 0, height: 0 }),
            (this.handleSendImage = this.handleSendImage.bind(this));
        }
        assignWidth(e) {
          if (e && !this.state.width) {
            const t = e.getBoundingClientRect();
            this.setState({ width: 0 | t.width, height: 0 | t.height });
          }
        }
        handleSendImage(e) {
          this.props.onClose(),
            this.props.onSendMessage(e, this.props.content.blob);
        }
        render() {
          if (!this.props.content) return null;
          const e = U(
              this.props.content.width,
              this.props.content.height,
              this.state.width,
              this.state.height,
              !1
            ),
            t = e
              ? { width: e.dstWidth + "px", height: e.dstHeight + "px" }
              : this.props.content.width > this.props.content.height
              ? { width: "100%" }
              : { height: "100%" };
          (t.maxWidth = "100%"), (t.maxHeight = "100%");
          let s = this.props.content.filename;
          const a = Math.max(((this.state.width / f / 1.5) | 0) - 2, 12);
          s.length > a &&
            (s = s.slice(0, a / 2 - 1) + "…" + s.slice(1 - a / 2));
          const i = this.props.content.width || "-",
            o = this.props.content.height || "-";
          return n().createElement(
            "div",
            { id: "image-preview" },
            n().createElement(
              "div",
              { id: "image-preview-caption-panel" },
              this.props.onSendMessage
                ? n().createElement("span", null, this.props.content.filename)
                : n().createElement(
                    "a",
                    {
                      href: this.props.content.url,
                      download: this.props.content.filename,
                    },
                    n().createElement(
                      "i",
                      { className: "material-icons" },
                      "file_download"
                    ),
                    " ",
                    n().createElement(l.FormattedMessage, {
                      id: "download_action",
                      defaultMessage: [{ type: 0, value: "download" }],
                    })
                  ),
              n().createElement(
                "a",
                {
                  href: "#",
                  onClick: (e) => {
                    e.preventDefault(), this.props.onClose();
                  },
                },
                n().createElement(
                  "i",
                  { className: "material-icons gray" },
                  "close"
                )
              )
            ),
            n().createElement(
              "div",
              {
                id: "image-preview-container",
                ref: (e) => this.assignWidth(e),
              },
              n().createElement("img", {
                src: this.props.content.url,
                style: t,
                className: "image-preview",
                alt: this.props.content.filename,
              })
            ),
            this.props.onSendMessage
              ? n().createElement(Pe, {
                  messagePrompt: "add_image_caption",
                  acceptBlank: !0,
                  onSendMessage: this.handleSendImage,
                  onError: this.props.onError,
                })
              : n().createElement(
                  "div",
                  { id: "image-preview-footer" },
                  n().createElement(
                    "div",
                    null,
                    n().createElement(
                      "div",
                      null,
                      n().createElement(
                        "b",
                        null,
                        n().createElement(l.FormattedMessage, {
                          id: "label_file_name",
                          defaultMessage: [{ type: 0, value: "File name:" }],
                        })
                      )
                    ),
                    n().createElement(
                      "div",
                      null,
                      n().createElement(
                        "span",
                        { title: this.props.content.filename },
                        s || "-"
                      )
                    )
                  ),
                  n().createElement(
                    "div",
                    null,
                    n().createElement(
                      "div",
                      null,
                      n().createElement(
                        "b",
                        null,
                        n().createElement(l.FormattedMessage, {
                          id: "label_content_type",
                          defaultMessage: [{ type: 0, value: "Content type:" }],
                        })
                      )
                    ),
                    n().createElement("div", null, this.props.content.type)
                  ),
                  n().createElement(
                    "div",
                    null,
                    n().createElement(
                      "div",
                      null,
                      n().createElement(
                        "b",
                        null,
                        n().createElement(l.FormattedMessage, {
                          id: "label_size",
                          defaultMessage: [{ type: 0, value: "Size:" }],
                        })
                      )
                    ),
                    n().createElement(
                      "div",
                      null,
                      i,
                      " × ",
                      o,
                      " px; ",
                      A(this.props.content.size)
                    )
                  )
                )
          );
        }
      }
      class Ue extends n().PureComponent {
        constructor(e) {
          super(e),
            (this.handleButtonAction = this.handleButtonAction.bind(this));
        }
        handleButtonAction(e, t) {
          e.preventDefault(), this.props.onAction(t);
        }
        render() {
          return n().createElement(
            "div",
            { className: "accept-invite-panel" },
            n().createElement(
              "div",
              { className: "title" },
              n().createElement(l.FormattedMessage, {
                id: "chat_invitation",
                defaultMessage: [
                  {
                    type: 0,
                    value:
                      "You are invited to start a new chat. What would you like to do?",
                  },
                ],
              })
            ),
            n().createElement(
              "div",
              { className: "footer" },
              n().createElement(
                "button",
                {
                  className: "primary",
                  onClick: (e) => {
                    this.handleButtonAction(e, "accept");
                  },
                },
                n().createElement(l.FormattedMessage, {
                  id: "chat_invitation_accept",
                  defaultMessage: [{ type: 0, value: "Accept" }],
                })
              ),
              n().createElement(
                "button",
                {
                  className: "secondary",
                  onClick: (e) => {
                    this.handleButtonAction(e, "delete");
                  },
                },
                n().createElement(l.FormattedMessage, {
                  id: "chat_invitation_ignore",
                  defaultMessage: [{ type: 0, value: "Ignore" }],
                })
              ),
              n().createElement(
                "button",
                {
                  className: "secondary",
                  onClick: (e) => {
                    this.handleButtonAction(e, "block");
                  },
                },
                n().createElement(l.FormattedMessage, {
                  id: "chat_invitation_block",
                  defaultMessage: [{ type: 0, value: "Block" }],
                })
              )
            )
          );
        }
      }
      class xe extends n().PureComponent {
        render() {
          return this.props.show
            ? n().createElement(
                "div",
                { className: "load-spinner-box" },
                n().createElement("div", { className: "loader-spinner" })
              )
            : null;
        }
      }
      class Re extends n().PureComponent {
        render() {
          const e = u + " (" + h().getLibrary() + ")";
          return n().createElement(
            "div",
            { id: "dummy-view" },
            n().createElement(
              "div",
              null,
              n().createElement(
                "a",
                { href: "https://github.com/tinode/chat/" },
                n().createElement("img", {
                  id: "logo",
                  alt: "logo",
                  src: "img/logo.svg",
                }),
                n().createElement("h2", null, "Tinode Web")
              ),
              n().createElement(
                "p",
                null,
                n().createElement(l.FormattedMessage, {
                  id: "label_client",
                  defaultMessage: [{ type: 0, value: "Client:" }],
                }),
                " ",
                e
              ),
              n().createElement(
                "p",
                null,
                n().createElement(l.FormattedMessage, {
                  id: "label_server",
                  defaultMessage: [{ type: 0, value: "Server:" }],
                }),
                " ",
                this.props.serverVersion,
                " (",
                this.props.serverAddress,
                ")"
              )
            )
          );
        }
      }
      class Le {
        static parseUrlHash(e) {
          const t = e.split("?", 2),
            s = {};
          let a = [];
          return (
            t[0] && (a = t[0].substr(1).split("/")),
            t[1] &&
              t[1].split("&").forEach(function (e) {
                let t = e.split("=");
                t[0] &&
                  (s[decodeURIComponent(t[0])] = decodeURIComponent(t[1]));
              }),
            { path: a, params: s }
          );
        }
        static navigateTo(e) {
          window.location.hash = e;
        }
        static composeUrlHash(e, t) {
          let s = e.join("/");
          const a = [];
          for (const e in t) t.hasOwnProperty(e) && a.push(e + "=" + t[e]);
          return a.length > 0 && (s += "?" + a.join("&")), s;
        }
        static addUrlParam(e, t, s) {
          const a = this.parseUrlHash(e);
          return (a.params[t] = s), this.composeUrlHash(a.path, a.params);
        }
        static removeUrlParam(e, t) {
          const s = this.parseUrlHash(e);
          return delete s.params[t], this.composeUrlHash(s.path, s.params);
        }
        static setUrlSidePanel(e, t) {
          const s = this.parseUrlHash(e);
          return (s.path[0] = t), this.composeUrlHash(s.path, s.params);
        }
        static setUrlTopic(e, t) {
          const s = this.parseUrlHash(e);
          return (
            (s.path[1] = t),
            delete s.params.info,
            this.composeUrlHash(s.path, s.params)
          );
        }
      }
      const qe = h().Drafty,
        ze = (0, l.defineMessages)({
          online_now: {
            id: "online_now",
            defaultMessage: [{ type: 0, value: "online now" }],
          },
          last_seen: {
            id: "last_seen_timestamp",
            defaultMessage: [{ type: 0, value: "Last seen" }],
          },
          not_found: {
            id: "title_not_found",
            defaultMessage: [{ type: 0, value: "Not found" }],
          },
          channel: {
            id: "channel",
            defaultMessage: [{ type: 0, value: "channel" }],
          },
          file_attachment_too_large: {
            id: "file_attachment_too_large",
            defaultMessage: [
              { type: 0, value: "The file size " },
              { type: 1, value: "size" },
              { type: 0, value: " exceeds the " },
              { type: 1, value: "limit" },
              { type: 0, value: " limit." },
            ],
          },
        });
      function Be(e) {
        if (e) {
          const t = e.getExcessive() || "";
          return e.isJoiner("given") && (t.includes("R") || t.includes("W"));
        }
        return !1;
      }
      function Oe(e) {
        if (e) {
          const t = e.getMissing() || "";
          return e.isJoiner("want") && (t.includes("R") || t.includes("W"));
        }
        return !1;
      }
      class je extends n().Component {
        constructor(e) {
          super(e),
            (this.state = je.getDerivedStateFromProps(e, {})),
            (this.leave = this.leave.bind(this)),
            (this.sendImageAttachment = this.sendImageAttachment.bind(this)),
            (this.sendFileAttachment = this.sendFileAttachment.bind(this)),
            (this.sendKeyPress = this.sendKeyPress.bind(this)),
            (this.handleScrollReference =
              this.handleScrollReference.bind(this)),
            (this.handleScrollEvent = this.handleScrollEvent.bind(this)),
            (this.handleDescChange = this.handleDescChange.bind(this)),
            (this.handleSubsUpdated = this.handleSubsUpdated.bind(this)),
            (this.handleMessageUpdate = this.handleMessageUpdate.bind(this)),
            (this.handleAllMessagesReceived =
              this.handleAllMessagesReceived.bind(this)),
            (this.handleInfoReceipt = this.handleInfoReceipt.bind(this)),
            (this.handleImagePostview = this.handleImagePostview.bind(this)),
            (this.handleClosePreview = this.handleClosePreview.bind(this)),
            (this.handleFormResponse = this.handleFormResponse.bind(this)),
            (this.handleContextClick = this.handleContextClick.bind(this)),
            (this.handleShowContextMenuMessage =
              this.handleShowContextMenuMessage.bind(this)),
            (this.handleNewChatAcceptance =
              this.handleNewChatAcceptance.bind(this)),
            (this.handleEnablePeer = this.handleEnablePeer.bind(this)),
            (this.handleAttachFile = this.handleAttachFile.bind(this)),
            (this.handleAttachImage = this.handleAttachImage.bind(this)),
            (this.handleCancelUpload = this.handleCancelUpload.bind(this)),
            (this.postReadNotification = this.postReadNotification.bind(this)),
            (this.clearNotificationQueue =
              this.clearNotificationQueue.bind(this)),
            (this.readNotificationQueue = []),
            (this.readNotificationTimer = null);
        }
        componentDidMount() {
          this.messagesScroller &&
            this.messagesScroller.addEventListener(
              "scroll",
              this.handleScrollEvent
            );
        }
        componentWillUnmount() {
          this.messagesScroller &&
            this.messagesScroller.removeEventListener(
              "scroll",
              this.handleScrollEvent
            ),
            this.clearNotificationQueue();
        }
        componentDidUpdate(e, t) {
          this.messagesScroller &&
            (t.topic != this.state.topic ||
            t.messageCount != this.state.messageCount
              ? (this.messagesScroller.scrollTop =
                  this.messagesScroller.scrollHeight -
                  this.state.scrollPosition)
              : e.viewportHeight > this.props.viewportHeight &&
                (this.messagesScroller.scrollTop +=
                  e.viewportHeight - this.props.viewportHeight));
          const s = this.props.tinode
            ? this.props.tinode.getTopic(this.state.topic)
            : void 0;
          if (
            (this.state.topic != t.topic &&
              (t.topic &&
                !h().isNewGroupTopicName(t.topic) &&
                this.leave(t.topic),
              s &&
                ((s.onData = this.handleMessageUpdate),
                (s.onAllMessagesReceived = this.handleAllMessagesReceived),
                (s.onInfo = this.handleInfoReceipt),
                (s.onMetaDesc = this.handleDescChange),
                (s.onSubsUpdated = this.handleSubsUpdated),
                (s.onPres = this.handleSubsUpdated))),
            this.props.applicationVisible
              ? this.postReadNotification(0)
              : this.clearNotificationQueue(),
            s &&
              !s.isSubscribed() &&
              this.props.ready &&
              (this.state.topic != t.topic || !e.ready))
          ) {
            const e =
              this.props.newTopicParams &&
              this.props.newTopicParams._topicName == this.props.topic;
            let t = s.startMetaQuery().withLaterDesc().withLaterSub();
            (this.state.isReader || e) &&
              ((t = t.withLaterData(24)),
              this.state.isReader && (t = t.withLaterDel()),
              this.setState({ fetchingMessages: !0 }));
            const a = e ? this.props.newTopicParams : void 0;
            s.subscribe(t.build(), a)
              .then((e) => {
                303 != e.code
                  ? (this.state.topic != e.topic &&
                      this.setState({ topic: e.topic }),
                    this.props.onNewTopicCreated(this.props.topic, e.topic),
                    s.queuedMessages((e) => {
                      !e._sending && s.isSubscribed() && s.publishMessage(e);
                    }))
                  : Le.navigateTo(Le.setUrlTopic("", e.params.topic));
              })
              .catch((e) => {
                console.log("Failed subscription to", this.state.topic),
                  this.props.onError(e.message, "err");
                const t = je.getDerivedStateFromProps({}, {});
                (t.title = this.props.intl.formatMessage(ze.not_found)),
                  this.setState(t);
              });
          }
        }
        static getDerivedStateFromProps(e, t) {
          let s = {};
          if (e.topic) {
            if (e.topic != t.topic) {
              const a = e.tinode.getTopic(e.topic);
              if (
                ((s = {
                  topic: e.topic,
                  docPreview: null,
                  imagePreview: null,
                  imagePostview: null,
                  typingIndicator: !1,
                  scrollPosition: 0,
                  fetchingMessages: !1,
                }),
                a)
              ) {
                const n = [];
                e.connected &&
                  a.subscribers((t) => {
                    t.online && t.user != e.myUserId && n.push(t);
                  }),
                  Object.assign(s, { onlineSubs: n }),
                  a.public
                    ? Object.assign(s, {
                        title: a.public.fn,
                        avatar: I(a.public.photo),
                      })
                    : Object.assign(s, { title: "", avatar: null });
                const i = a.p2pPeerDesc();
                i
                  ? Object.assign(s, { peerMessagingDisabled: Oe(i.acs) })
                  : t.peerMessagingDisabled &&
                    Object.assign(s, { peerMessagingDisabled: !1 }),
                  Object.assign(s, {
                    messageCount: a.messageCount(),
                    latestClearId: a.maxClearId(),
                    channel: a.isChannelType(),
                  });
              } else
                Object.assign(s, {
                  messageCount: 0,
                  latestClearId: -1,
                  onlineSubs: [],
                  title: "",
                  avatar: null,
                  peerMessagingDisabled: !1,
                  channel: !1,
                });
            }
          } else
            s = {
              messageCount: 0,
              latestClearId: -1,
              onlineSubs: [],
              topic: null,
              title: "",
              avatar: null,
              docPreview: null,
              imagePreview: null,
              imagePostview: null,
              typingIndicator: !1,
              scrollPosition: 0,
              fetchingMessages: !1,
              peerMessagingDisabled: !1,
              channel: !1,
            };
          return (
            e.acs
              ? (e.acs.isWriter() != t.isWriter && (s.isWriter = !t.isWriter),
                e.acs.isReader() != t.isReader && (s.isReader = !t.isReader),
                !e.acs.isReader("given") != t.readingBlocked &&
                  (s.readingBlocked = !t.readingBlocked),
                e.acs.isSharer() != t.isSharer && (s.isSharer = !t.isSharer))
              : (t.isWriter && (s.isWriter = !1),
                t.isReader && (s.isReader = !1),
                t.readingBlocked || (t.readingBlocked = !0),
                t.isSharer && (s.isSharer = !1)),
            Be(e.acs) == !t.unconformed && (s.unconfirmed = !t.unconformed),
            !e.connected &&
              t.onlineSubs &&
              t.onlineSubs.length > 0 &&
              (s.onlineSubs = []),
            s
          );
        }
        leave(e) {
          if (!e || !this.props.tinode.isTopicCached(e)) return;
          const t = this.props.tinode.getTopic(e);
          t &&
            t.isSubscribed() &&
            t
              .leave(!1)
              .catch(() => {})
              .finally(() => {
                this.setState({ fetchingMessages: !1 }),
                  (t.onData = void 0),
                  (t.onAllMessagesReceived = void 0),
                  (t.onInfo = void 0),
                  (t.onMetaDesc = void 0),
                  (t.onSubsUpdated = void 0),
                  (t.onPres = void 0);
              });
        }
        handleScrollReference(e) {
          e &&
            (e.addEventListener("scroll", this.handleScrollEvent),
            (this.messagesScroller = e),
            (this.messagesScroller.scrollTop =
              this.messagesScroller.scrollHeight - this.state.scrollPosition));
        }
        handleScrollEvent(e) {
          if (
            (this.setState({
              scrollPosition: e.target.scrollHeight - e.target.scrollTop,
            }),
            !this.state.fetchingMessages && e.target.scrollTop <= 0)
          ) {
            const e = this.props.tinode.getTopic(this.state.topic);
            e &&
              e.isSubscribed() &&
              e.msgHasMoreMessages() &&
              this.setState({ fetchingMessages: !0 }, () => {
                e.getMessagesPage(24)
                  .catch((e) => this.props.onError(e.message, "err"))
                  .finally(() => this.setState({ fetchingMessages: !1 }));
              });
          }
        }
        handleDescChange(e) {
          e.public
            ? this.setState({ title: e.public.fn, avatar: I(e.public.photo) })
            : this.setState({ title: "", avatar: null }),
            e.acs &&
              this.setState({
                isWriter: e.acs.isWriter(),
                isReader: e.acs.isReader(),
                readingBlocked: !e.acs.isReader("given"),
                unconfirmed: Be(e.acs),
              });
        }
        postReadNotification(e) {
          if (!this.props.applicationVisible) return;
          this.readNotificationTimer ||
            (this.readNotificationTimer = setInterval(() => {
              if (0 == this.readNotificationQueue.length)
                return (
                  clearInterval(this.readNotificationTimer),
                  void (this.readNotificationTimer = null)
                );
              let e = -1;
              for (; this.readNotificationQueue.length > 0; ) {
                const t = this.readNotificationQueue[0];
                if (t.topicName != this.state.topic) {
                  this.readNotificationQueue.shift();
                  continue;
                }
                const s = new Date();
                if (!(t.sendAt <= s)) break;
                this.readNotificationQueue.shift(), (e = Math.max(e, t.seq));
              }
              if (e >= 0) {
                const t = this.props.tinode.getTopic(this.state.topic);
                t && t.noteRead(e);
              }
            }, 300));
          const t = new Date();
          this.readNotificationQueue.push({
            topicName: this.state.topic,
            seq: e,
            sendAt: t.setMilliseconds(t.getMilliseconds() + 1e3),
          });
        }
        clearNotificationQueue() {
          (this.readNotificationQueue = []),
            this.readNotificationTimer &&
              (clearInterval(this.readNotificationTimer),
              (this.readNotificationTimer = null));
        }
        handleSubsUpdated() {
          if (this.state.topic) {
            const e = [],
              t = this.props.tinode.getTopic(this.state.topic);
            t.subscribers((t) => {
              t.online && t.user != this.props.myUserId && e.push(t);
            });
            const s = { onlineSubs: e },
              a = t.p2pPeerDesc();
            a
              ? Object.assign(s, { peerMessagingDisabled: Oe(a.acs) })
              : this.state.peerMessagingDisabled &&
                Object.assign(s, { peerMessagingDisabled: !1 }),
              this.setState(s);
          }
        }
        handleMessageUpdate(e) {
          const t = this.props.tinode.getTopic(this.state.topic);
          if (!e) return void this.setState({ latestClearId: t.maxClearId() });
          this.setState({ messageCount: t.messageCount() }),
            t.isNewMessage(e.seq) && this.setState({ scrollPosition: 0 });
          t.msgStatus(e, !0) >= h().MESSAGE_STATUS_SENT &&
            e.from != this.props.myUserId &&
            this.postReadNotification(e.seq),
            this.props.onData(e);
        }
        handleAllMessagesReceived(e) {
          this.setState({ fetchingMessages: !1 }),
            e > 0 && this.postReadNotification(0);
        }
        handleInfoReceipt(e) {
          switch (e.what) {
            case "kp":
              clearTimeout(this.keyPressTimer);
              var t = this;
              (this.keyPressTimer = setTimeout(function () {
                t.setState({ typingIndicator: !1 });
              }, 4e3)),
                this.state.typingIndicator ||
                  this.setState({ typingIndicator: !0 });
              break;
            case "read":
            case "recv":
              this.forceUpdate();
              break;
            default:
              console.log("Other change in topic: ", e.what);
          }
        }
        handleImagePostview(e) {
          this.setState({ imagePostview: e });
        }
        handleClosePreview() {
          this.state.imagePreview &&
            this.state.imagePreview.url &&
            URL.revokeObjectURL(this.state.imagePreview.url),
            this.setState({
              imagePostview: null,
              imagePreview: null,
              docPreview: null,
            });
        }
        handleFormResponse(e, t, s) {
          if ("pub" == e) this.props.sendMessage(qe.attachJSON(qe.parse(t), s));
          else if ("url" == e) {
            const e = new URL(s.ref),
              t = e.searchParams;
            for (let e in s.resp)
              s.resp.hasOwnProperty(e) && t.set(e, s.resp[e]);
            ["name", "seq"].map((e) => {
              s[e] && t.set(e, s[e]);
            }),
              t.set("uid", this.props.myUserId),
              t.set("topic", this.state.topic),
              (e.search = t),
              window.open(e, "_blank");
          } else console.log("Unknown action in form", e);
        }
        handleContextClick(e) {
          e.preventDefault(),
            e.stopPropagation(),
            this.props.showContextMenu({
              topicName: this.state.topic,
              y: e.pageY,
              x: e.pageX,
            });
        }
        handleShowContextMenuMessage(e, t) {
          e.topicName = this.state.topic;
          const s = t || [],
            a = this.props.tinode.getTopic(e.topicName);
          if (a) {
            a.isChannelType() || s.push("message_delete");
            const e = a.getAccessMode();
            e && e.isDeleter() && s.push("message_delete_hard");
          }
          this.props.showContextMenu(e, s);
        }
        handleNewChatAcceptance(e) {
          this.props.onNewChat(this.state.topic, e);
        }
        handleEnablePeer(e) {
          e.preventDefault(),
            this.props.onChangePermissions(
              this.state.topic,
              v,
              this.state.topic
            );
        }
        sendKeyPress() {
          const e = this.props.tinode.getTopic(this.state.topic);
          e.isSubscribed() && e.noteKeyPress();
        }
        sendFileAttachment(e) {
          const t =
            (0.75 * this.props.tinode.getServerLimit("maxMessageSize", w) -
              1024) |
            0;
          if (e.size > t) {
            const t = this.props.tinode.getLargeFileHelper();
            if (!t)
              return void this.props.onError(
                this.props.intl.formatMessage(ze.cannot_initiate_upload)
              );
            const s = t.upload(e),
              a = qe.attachFile(null, {
                mime: e.type,
                filename: e.name,
                size: e.size,
                urlPromise: s,
              });
            this.props.sendMessage(a, s, t);
          } else
            R(
              e,
              (e, t, s) => {
                this.props.sendMessage(
                  qe.attachFile(null, { mime: e, data: t, filename: s })
                );
              },
              this.props.onError
            );
        }
        handleAttachFile(e) {
          const t = this.props.tinode.getServerLimit("maxFileUploadSize", C);
          e.size > t
            ? this.props.onError(
                this.props.intl.formatMessage(ze.file_attachment_too_large, {
                  size: A(e.size),
                  limit: A(t),
                }),
                "err"
              )
            : this.setState({
                docPreview: {
                  file: e,
                  filename: e.name,
                  size: e.size,
                  type: e.type,
                },
              });
        }
        sendImageAttachment(e, t) {
          const s = this.state.imagePreview.type,
            a = this.state.imagePreview.width,
            n = this.state.imagePreview.height,
            i = this.state.imagePreview.filename,
            o =
              (0.75 * this.props.tinode.getServerLimit("maxMessageSize", w) -
                1024) |
              0;
          if (t.size > o) {
            const o = this.props.tinode.getLargeFileHelper();
            if (!o)
              return void this.props.onError(
                this.props.intl.formatMessage(ze.cannot_initiate_upload)
              );
            const l = o.upload(t);
            x(
              t,
              64,
              64,
              -1,
              !1,
              (r, c) => {
                L(c, (r, c) => {
                  let d = qe.insertImage(null, 0, {
                    mime: s,
                    _tempPreview: c,
                    width: a,
                    height: n,
                    filename: i,
                    size: t.size,
                    urlPromise: l,
                  });
                  e &&
                    ((d = qe.appendLineBreak(d)),
                    (d = qe.append(d, qe.init(e)))),
                    this.props.sendMessage(d, l, o);
                });
              },
              (e) => {
                this.props.onError(e, "err");
              }
            );
          } else
            L(t, (s, o) => {
              let l = qe.insertImage(null, 0, {
                mime: s,
                preview: o,
                width: a,
                height: n,
                filename: i,
                size: t.size,
              });
              e &&
                ((l = qe.appendLineBreak(l)), (l = qe.append(l, qe.init(e)))),
                this.props.sendMessage(l);
            });
        }
        handleAttachImage(e) {
          const t = this.props.tinode.getServerLimit("maxFileUploadSize", C);
          x(
            e,
            y,
            y,
            t,
            !1,
            (e, t, s, a, n) => {
              this.setState({
                imagePreview: {
                  url: URL.createObjectURL(t),
                  blob: t,
                  filename: n,
                  width: s,
                  height: a,
                  size: t.size,
                  type: e,
                },
              });
            },
            (e) => {
              this.props.onError(e, "err");
            }
          );
        }
        handleCancelUpload(e, t) {
          const s = this.props.tinode.getTopic(this.state.topic).findMessage(e);
          s && (s._cancelled = !0), t.cancel();
        }
        render() {
          const { formatMessage: e } = this.props.intl;
          let t;
          if (this.props.hideSelf) t = null;
          else if (this.state.topic) {
            let s;
            if (this.state.imagePreview)
              s = n().createElement(Ie, {
                content: this.state.imagePreview,
                onClose: this.handleClosePreview,
                onSendMessage: this.sendImageAttachment,
              });
            else if (this.state.imagePostview)
              s = n().createElement(Ie, {
                content: this.state.imagePostview,
                onClose: this.handleClosePreview,
              });
            else if (this.state.docPreview)
              s = n().createElement(De, {
                content: this.state.docPreview,
                onClose: this.handleClosePreview,
                onSendMessage: this.sendFileAttachment,
              });
            else {
              const t = this.props.tinode.getTopic(this.state.topic),
                a = t.isChannelType(),
                i = t.isGroupType() && !a;
              let o = [],
                r = null,
                c = null;
              t.messages((e, s, a, l) => {
                let d = a ? a.from || null : "chan",
                  h = "single",
                  p = e.from || "chan";
                p == r
                  ? (h = p == d ? "middle" : "last")
                  : p == d && (h = "first"),
                  (r = p);
                const m = !(p == this.props.myUserId),
                  u = t.msgStatus(e, !0);
                let _, g, b;
                if (i) {
                  const e = t.userDesc(p);
                  e && e.public && ((_ = e.public.fn), (g = I(e.public.photo))),
                    (b = p),
                    (c = "chat-box group");
                } else c = "chat-box";
                o.push(
                  n().createElement(ke, {
                    tinode: this.props.tinode,
                    content: e.content,
                    deleted: e.hi,
                    mimeType: e.head ? e.head.mime : null,
                    timestamp: e.ts,
                    response: m,
                    seq: e.seq,
                    userFrom: b,
                    userName: _,
                    userAvatar: g,
                    sequence: h,
                    received: u,
                    uploader: e._uploader,
                    viewportWidth: this.props.viewportWidth,
                    showContextMenu:
                      !this.state.channel && this.handleShowContextMenuMessage,
                    onImagePreview: this.handleImagePostview,
                    onFormResponse: this.handleFormResponse,
                    onError: this.props.onError,
                    onCancelUpload: this.handleCancelUpload,
                    key: e.seq,
                  })
                );
              });
              let d = null;
              if (a) d = e(ze.channel);
              else {
                const t = this.props.tinode
                  .getMeTopic()
                  .getContact(this.state.topic);
                t &&
                  h().isP2PTopicName(t.topic) &&
                  (t.online
                    ? (d = e(ze.online_now))
                    : t.seen &&
                      (d =
                        e(ze.last_seen) +
                        ": " +
                        N(t.seen.when, this.props.intl.locale)));
              }
              const p = this.state.avatar || !0,
                m = this.props.online
                  ? "online" + (this.state.typingIndicator ? " typing" : "")
                  : "offline";
              s = n().createElement(
                n().Fragment,
                null,
                n().createElement(
                  "div",
                  { id: "topic-caption-panel", className: "caption-panel" },
                  this.props.displayMobile
                    ? n().createElement(
                        "a",
                        {
                          href: "#",
                          id: "hide-message-view",
                          onClick: (e) => {
                            e.preventDefault(), this.props.onHideMessagesView();
                          },
                        },
                        n().createElement(
                          "i",
                          { className: "material-icons" },
                          "arrow_back"
                        )
                      )
                    : null,
                  n().createElement(
                    "div",
                    { className: "avatar-box" },
                    n().createElement(P, {
                      avatar: p,
                      topic: this.state.topic,
                      title: this.state.title,
                    }),
                    a ? null : n().createElement("span", { className: m })
                  ),
                  n().createElement(
                    "div",
                    { id: "topic-title-group" },
                    n().createElement(
                      "div",
                      { id: "topic-title", className: "panel-title" },
                      this.state.title ||
                        n().createElement(
                          "i",
                          null,
                          n().createElement(l.FormattedMessage, {
                            id: "unnamed_topic",
                            defaultMessage: [{ type: 0, value: "Unnamed" }],
                          })
                        )
                    ),
                    n().createElement("div", { id: "topic-last-seen" }, d)
                  ),
                  i
                    ? n().createElement(Fe, {
                        subscribers: this.state.onlineSubs,
                      })
                    : n().createElement("div", { id: "topic-users" }),
                  n().createElement(
                    "div",
                    null,
                    n().createElement(
                      "a",
                      { href: "#", onClick: this.handleContextClick },
                      n().createElement(
                        "i",
                        { className: "material-icons" },
                        "more_vert"
                      )
                    )
                  )
                ),
                this.props.displayMobile
                  ? n().createElement(le, {
                      level: this.props.errorLevel,
                      text: this.props.errorText,
                      onClearError: this.props.onError,
                    })
                  : null,
                n().createElement(xe, { show: this.state.fetchingMessages }),
                n().createElement(
                  "div",
                  { id: "messages-container" },
                  n().createElement(
                    "div",
                    { id: "messages-panel", ref: this.handleScrollReference },
                    n().createElement("ul", { id: "scroller", className: c }, o)
                  ),
                  this.state.isReader
                    ? null
                    : n().createElement(
                        "div",
                        { id: "write-only-background" },
                        this.state.readingBlocked
                          ? n().createElement(
                              "div",
                              { id: "write-only-note" },
                              n().createElement(l.FormattedMessage, {
                                id: "messages_not_readable",
                                defaultMessage: [
                                  { type: 0, value: "no access to messages" },
                                ],
                              })
                            )
                          : null
                      )
                ),
                this.state.peerMessagingDisabled && !this.state.unconfirmed
                  ? n().createElement(
                      "div",
                      { id: "peer-messaging-disabled-note" },
                      n().createElement(
                        "i",
                        { className: "material-icons secondary" },
                        "block"
                      ),
                      " ",
                      n().createElement(l.FormattedMessage, {
                        id: "peers_messaging_disabled",
                        defaultMessage: [
                          { type: 0, value: "Peer's messaging is disabled." },
                        ],
                      }),
                      " ",
                      n().createElement(
                        "a",
                        { href: "#", onClick: this.handleEnablePeer },
                        n().createElement(l.FormattedMessage, {
                          id: "enable_peers_messaging",
                          defaultMessage: [{ type: 0, value: "Enable" }],
                        })
                      ),
                      "."
                    )
                  : null,
                this.state.unconfirmed
                  ? n().createElement(Ue, {
                      onAction: this.handleNewChatAcceptance,
                    })
                  : n().createElement(Pe, {
                      disabled: !this.state.isWriter,
                      onSendMessage: this.props.sendMessage,
                      onKeyPress: this.sendKeyPress,
                      onAttachFile: this.handleAttachFile,
                      onAttachImage: this.handleAttachImage,
                      onError: this.props.onError,
                    })
              );
            }
            t = n().createElement("div", { id: "topic-view" }, s);
          } else
            t = n().createElement(Re, {
              serverVersion: this.props.serverVersion,
              serverAddress: this.props.serverAddress,
            });
          return t;
        }
      }
      const He = (0, l.injectIntl)(je);
      class Ke extends n().PureComponent {
        render() {
          return n().createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault(), this.props.onBack();
              },
            },
            n().createElement(
              "i",
              { className: "material-icons" },
              "arrow_back"
            )
          );
        }
      }
      class We extends n().PureComponent {
        render() {
          return n().createElement(
            "div",
            null,
            n().createElement(
              "a",
              {
                href: "#",
                onClick: (e) => {
                  e.preventDefault(), this.props.onNewTopic();
                },
              },
              n().createElement("i", { className: "material-icons" }, "chat")
            ),
            " ",
            n().createElement(
              "a",
              {
                href: "#",
                onClick: (e) => {
                  e.preventDefault(), this.props.onSettings();
                },
              },
              n().createElement(
                "i",
                { className: "material-icons" },
                "settings"
              )
            )
          );
        }
      }
      class Ve extends n().PureComponent {
        render() {
          return n().createElement(
            "div",
            null,
            n().createElement(
              "a",
              {
                href: "#",
                onClick: (e) => {
                  e.preventDefault(), this.props.onSignUp();
                },
              },
              n().createElement(
                "i",
                { className: "material-icons" },
                "person_add"
              )
            ),
            " ",
            n().createElement(
              "a",
              {
                href: "#",
                onClick: (e) => {
                  e.preventDefault(), this.props.onSettings();
                },
              },
              n().createElement(
                "i",
                { className: "material-icons" },
                "settings"
              )
            )
          );
        }
      }
      class Ge extends n().PureComponent {
        render() {
          return n().createElement(
            "div",
            { id: "side-caption-panel", className: "caption-panel" },
            this.props.onCancel
              ? n().createElement(Ke, { onBack: this.props.onCancel })
              : null,
            this.props.avatar
              ? n().createElement(
                  "div",
                  { id: "self-avatar", className: "avatar-box" },
                  n().createElement(P, {
                    avatar: this.props.avatar,
                    topic: this.props.myUserId,
                    title: this.props.title,
                  })
                )
              : null,
            n().createElement(
              "div",
              { id: "sidepanel-title", className: "panel-title" },
              this.props.title
            ),
            "login" === this.props.state
              ? n().createElement(Ve, {
                  onSignUp: this.props.onSignUp,
                  onSettings: this.props.onSettings,
                })
              : "contacts" === this.props.state
              ? n().createElement(We, {
                  onNewTopic: this.props.onNewTopic,
                  onSettings: this.props.onSettings,
                })
              : null
          );
        }
      }
      const Je = (0, l.defineMessages)({
        archived_contacts_title: {
          id: "archived_contacts",
          defaultMessage: [
            { type: 0, value: "Archived contacts (" },
            { type: 1, value: "count" },
            { type: 0, value: ")" },
          ],
        },
      });
      class Qe extends n().Component {
        constructor(e) {
          super(e),
            (this.handleAction = this.handleAction.bind(this)),
            (this.state = Qe.deriveStateFromProps(e));
        }
        static deriveStateFromProps(e) {
          const t = [];
          let s = 0,
            a = 0;
          return (
            e.chatList.map((n) => {
              const i = n.acs && !n.acs.isJoiner();
              i && e.blocked && t.push(n),
                i ||
                  e.blocked ||
                  (n.private && n.private.arch
                    ? e.archive
                      ? t.push(n)
                      : a++
                    : e.archive || (t.push(n), (s += n.unread > 0 ? 1 : 0)));
            }),
            t.sort((e, t) => (t.touched || 0) - (e.touched || 0)),
            a > 0 &&
              t.push({
                action: "archive",
                title: Je.archived_contacts_title,
                values: { count: a },
              }),
            { contactList: t, unreadThreads: s }
          );
        }
        componentDidUpdate(e, t) {
          if (
            e.chatList != this.props.chatList ||
            e.archive != this.props.archive ||
            e.blocked != this.props.blocked
          ) {
            const e = Qe.deriveStateFromProps(this.props);
            this.setState(e),
              e.unreadThreads != t.unreadThreads && j(e.unreadThreads);
          }
        }
        handleAction(e) {
          this.props.onShowArchive();
        }
        render() {
          return n().createElement(
            l.FormattedMessage,
            {
              id: "contacts_not_found",
              defaultMessage: [
                { type: 0, value: "You have no chats" },
                { type: 0, value: "<br/>" },
                { type: 0, value: "¯∖_(ツ)_/¯" },
              ],
            },
            (e) =>
              n().createElement(ie, {
                connected: this.props.connected,
                contacts: this.state.contactList,
                emptyListMessage: e,
                topicSelected: this.props.topicSelected,
                myUserId: this.props.myUserId,
                showOnline: !0,
                showUnread: !0,
                onTopicSelected: this.props.onTopicSelected,
                showContextMenu: this.props.showContextMenu,
                onAction: this.handleAction,
              })
          );
        }
      }
      class Ye {
        static setObject(e, t) {
          localStorage.setItem(e, JSON.stringify(t));
        }
        static getObject(e) {
          const t = localStorage.getItem(e);
          return t && JSON.parse(t);
        }
        static updateObject(e, t) {
          const s = this.getObject(e);
          this.setObject(e, Object.assign(s || {}, t));
        }
        static removeItem(e) {
          localStorage.removeItem(e);
        }
      }
      class Ze extends n().PureComponent {
        constructor(e) {
          super(e),
            (this.state = {
              login: "",
              password: "",
              email: "",
              fn: "",
              imageDataUrl: null,
              errorCleared: !1,
              saveToken: Ye.getObject("keep-logged-in"),
            }),
            (this.handleLoginChange = this.handleLoginChange.bind(this)),
            (this.handlePasswordChange = this.handlePasswordChange.bind(this)),
            (this.handleEmailChange = this.handleEmailChange.bind(this)),
            (this.handleFnChange = this.handleFnChange.bind(this)),
            (this.handleImageChanged = this.handleImageChanged.bind(this)),
            (this.handleToggleSaveToken =
              this.handleToggleSaveToken.bind(this)),
            (this.handleSubmit = this.handleSubmit.bind(this));
        }
        handleLoginChange(e) {
          this.setState({ login: e.target.value });
        }
        handlePasswordChange(e) {
          this.setState({ password: e });
        }
        handleEmailChange(e) {
          this.setState({ email: e.target.value });
        }
        handleFnChange(e) {
          this.setState({ fn: e.target.value });
        }
        handleImageChanged(e) {
          this.setState({ imageDataUrl: e });
        }
        handleToggleSaveToken() {
          Ye.setObject("keep-logged-in", !this.state.saveToken),
            this.setState({ saveToken: !this.state.saveToken });
        }
        handleSubmit(e) {
          e.preventDefault(),
            this.setState({ errorCleared: !1 }),
            this.props.onCreateAccount(
              this.state.login.trim(),
              this.state.password.trim(),
              H(this.state.fn.trim().substring(0, S), this.state.imageDataUrl),
              { meth: "email", val: this.state.email }
            );
        }
        render() {
          let e = "primary";
          return (
            this.props.disabled && (e += " disabled"),
            n().createElement(
              "form",
              { className: "panel-form-column", onSubmit: this.handleSubmit },
              n().createElement(
                "div",
                { className: "panel-form-row" },
                n().createElement(
                  "div",
                  { className: "panel-form-column" },
                  n().createElement(
                    l.FormattedMessage,
                    {
                      id: "login_prompt",
                      defaultMessage: [{ type: 0, value: "Login" }],
                    },
                    (e) =>
                      n().createElement("input", {
                        type: "text",
                        placeholder: e,
                        autoComplete: "user-name",
                        value: this.state.login,
                        onChange: this.handleLoginChange,
                        required: !0,
                        autoFocus: !0,
                      })
                  ),
                  n().createElement(
                    l.FormattedMessage,
                    {
                      id: "password_prompt",
                      defaultMessage: [{ type: 0, value: "Password" }],
                    },
                    (e) =>
                      n().createElement(me, {
                        placeholder: e,
                        autoComplete: "new-password",
                        value: this.state.password,
                        onFinished: this.handlePasswordChange,
                        required: !0,
                      })
                  )
                ),
                n().createElement(q, {
                  onImageChanged: this.handleImageChanged,
                  onError: this.props.onError,
                })
              ),
              n().createElement(
                "div",
                { className: "panel-form-row" },
                n().createElement(
                  l.FormattedMessage,
                  {
                    id: "full_name_prompt",
                    defaultMessage: [
                      { type: 0, value: "Full name, e.g. John Doe" },
                    ],
                  },
                  (e) =>
                    n().createElement("input", {
                      type: "text",
                      placeholder: e,
                      autoComplete: "name",
                      value: this.state.fn,
                      onChange: this.handleFnChange,
                      required: !0,
                    })
                )
              ),
              n().createElement(
                "div",
                { className: "panel-form-row" },
                n().createElement(
                  l.FormattedMessage,
                  {
                    id: "email_prompt",
                    defaultMessage: [
                      { type: 0, value: "Email, e.g. jdoe@example.com" },
                    ],
                  },
                  (e) =>
                    n().createElement("input", {
                      type: "email",
                      placeholder: e,
                      autoComplete: "email",
                      value: this.state.email,
                      onChange: this.handleEmailChange,
                      required: !0,
                    })
                )
              ),
              n().createElement(
                "div",
                { className: "panel-form-row" },
                n().createElement(z, {
                  id: "save-token",
                  name: "save-token",
                  checked: this.state.saveToken,
                  onChange: this.handleToggleSaveToken,
                }),
                n().createElement(
                  l.FormattedMessage,
                  {
                    id: "stay_logged_in",
                    defaultMessage: [{ type: 0, value: "Stay logged in" }],
                  },
                  (e) =>
                    n().createElement(
                      "label",
                      { htmlFor: "save-token" },
                      " ",
                      e
                    )
                )
              ),
              n().createElement(
                "div",
                { className: "dialog-buttons" },
                n().createElement(
                  "button",
                  { className: e, type: "submit" },
                  n().createElement(l.FormattedMessage, {
                    id: "button_sign_up",
                    defaultMessage: [{ type: 0, value: "Sign up" }],
                  })
                )
              )
            )
          );
        }
      }
      class Xe extends n().Component {
        constructor(e) {
          super(e);
          const t = this.props.tinode.getMeTopic();
          this.state = {
            fullName: t.public ? t.public.fn : void 0,
            avatar: I(t.public ? t.public.photo : null),
          };
        }
        render() {
          return n().createElement(
            "div",
            { className: "scrollable-panel" },
            n().createElement(
              "div",
              { className: "panel-form-row" },
              n().createElement(
                "div",
                { className: "panel-form-column" },
                n().createElement(
                  "label",
                  { className: "small" },
                  n().createElement(l.FormattedMessage, {
                    id: "label_your_name",
                    defaultMessage: [{ type: 0, value: "Your name" }],
                  })
                ),
                n().createElement(
                  "div",
                  { className: "large" },
                  this.state.fullName
                ),
                n().createElement(
                  "div",
                  null,
                  n().createElement(
                    "label",
                    { className: "small" },
                    n().createElement(l.FormattedMessage, {
                      id: "label_user_id",
                      defaultMessage: [{ type: 0, value: "ID:" }],
                    })
                  ),
                  " ",
                  n().createElement("tt", null, this.props.myUserId)
                )
              ),
              n().createElement(q, {
                avatar: this.state.avatar,
                readOnly: !this.state.owner,
                uid: this.props.myUserId,
                title: this.state.fullName,
              })
            ),
            n().createElement(
              "div",
              { className: "panel-form-row" },
              n().createElement(
                "a",
                {
                  href: "#",
                  className: "flat-button",
                  onClick: (e) => {
                    e.preventDefault(), this.props.onBasicNavigate("general");
                  },
                },
                n().createElement("i", { className: "material-icons" }, "edit"),
                " ",
                n().createElement(l.FormattedMessage, {
                  id: "button_edit",
                  defaultMessage: [{ type: 0, value: "Edit" }],
                })
              )
            ),
            n().createElement("div", { className: "hr" }),
            n().createElement(
              "div",
              { className: "panel-form-column" },
              n().createElement(
                "a",
                {
                  href: "#",
                  className: "flat-button",
                  onClick: (e) => {
                    e.preventDefault(), this.props.onBasicNavigate("notif");
                  },
                },
                n().createElement(
                  "i",
                  { className: "material-icons" },
                  "notifications"
                ),
                " ",
                n().createElement(l.FormattedMessage, {
                  id: "sidepanel_title_acc_notifications",
                  defaultMessage: [{ type: 0, value: "Notifications" }],
                })
              ),
              n().createElement(
                "a",
                {
                  href: "#",
                  className: "flat-button",
                  onClick: (e) => {
                    e.preventDefault(), this.props.onBasicNavigate("security");
                  },
                },
                n().createElement(
                  "i",
                  { className: "material-icons" },
                  "security"
                ),
                " ",
                n().createElement(l.FormattedMessage, {
                  id: "sidepanel_title_acc_security",
                  defaultMessage: [{ type: 0, value: "Security" }],
                })
              ),
              n().createElement(
                "a",
                {
                  href: "#",
                  className: "flat-button",
                  onClick: (e) => {
                    e.preventDefault(), this.props.onBasicNavigate("support");
                  },
                },
                n().createElement(
                  "i",
                  { className: "material-icons" },
                  "contact_support"
                ),
                " ",
                n().createElement(l.FormattedMessage, {
                  id: "sidepanel_title_acc_support",
                  defaultMessage: [{ type: 0, value: "Support" }],
                })
              )
            )
          );
        }
      }
      class $e extends n().Component {
        constructor(e) {
          super(e);
          const t = this.props.tinode.getMeTopic();
          (this.state = {
            fullName: t.public ? t.public.fn : void 0,
            avatar: I(t.public ? t.public.photo : null),
            tags: t.tags(),
            credentials: t.getCredentials() || [],
            addCredActive: !1,
            addCredInvalid: !1,
            newCred: "",
            previousOnTags: t.onTagsUpdated,
          }),
            (this.tnNewTags = this.tnNewTags.bind(this)),
            (this.tnCredsUpdated = this.tnCredsUpdated.bind(this)),
            (this.handleFullNameUpdate = this.handleFullNameUpdate.bind(this)),
            (this.handleImageChanged = this.handleImageChanged.bind(this)),
            (this.handleCredChange = this.handleCredChange.bind(this)),
            (this.handleCredKeyDown = this.handleCredKeyDown.bind(this)),
            (this.handleCredEntered = this.handleCredEntered.bind(this)),
            (this.handleTagsUpdated = this.handleTagsUpdated.bind(this));
        }
        componentDidMount() {
          const e = this.props.tinode.getMeTopic();
          (e.onCredsUpdated = this.tnCredsUpdated),
            (e.onTagsUpdated = this.tnNewTags);
        }
        componentWillUnmount() {
          const e = this.props.tinode.getMeTopic();
          (e.onTagsUpdated = this.state.previousOnTags),
            (e.onCredsUpdated = void 0);
        }
        tnNewTags(e) {
          this.setState({ tags: e });
        }
        tnCredsUpdated(e) {
          this.setState({ credentials: e || [] });
        }
        handleFullNameUpdate(e) {
          (e = e.trim().substring(0, S)) &&
            (this.setState({ fullName: e }),
            this.props.onUpdateAccount(void 0, H(e, null)));
        }
        handleImageChanged(e) {
          this.setState({ avatar: e }),
            this.props.onUpdateAccount(void 0, H(null, e || h().DEL_CHAR));
        }
        handleCredChange(e) {
          this.setState({ newCred: e.target.value, addCredInvalid: !1 });
        }
        handleCredKeyDown(e) {
          27 === e.keyCode
            ? this.setState({ newCred: "", addCredActive: !1 })
            : 13 === e.keyCode && this.handleCredEntered(e);
        }
        handleCredEntered(e) {
          let t = this.state.newCred.trim();
          if (!t)
            return void this.setState({
              addCredActive: !1,
              addCredInvalid: !1,
            });
          let s,
            a = (function (e) {
              return (
                (e = e.trim()),
                /^(?:\+?(\d{1,3}))?[- (.]*(\d{3})[- ).]*(\d{3})[- .]*(\d{2})[- .]*(\d{2})?$/.test(
                  e
                )
                  ? e.replace(/[- ().]*/, "")
                  : null
              );
            })(t);
          a
            ? (s = "tel")
            : ((a = (function (e) {
                return (
                  (e = e.trim()),
                  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e)
                    ? e
                    : null
                );
              })(t)),
              a && (s = "email")),
            s
              ? (this.props.onCredAdd(s, a),
                this.setState({ addCredActive: !1, newCred: "" }))
              : this.setState({ addCredInvalid: !0 });
        }
        handleTagsUpdated(e) {
          K(this.state.tags.slice(0), e.slice(0)) || this.props.onUpdateTags(e);
        }
        render() {
          const e = [];
          return (
            this.state.credentials.map((t) => {
              e.push(
                n().createElement(
                  "div",
                  { key: t.meth + ":" + t.val + ":" + t.done },
                  t.meth,
                  ": ",
                  n().createElement("tt", null, t.val),
                  n().createElement(
                    "span",
                    null,
                    " ",
                    t.done
                      ? null
                      : n().createElement(
                          "a",
                          {
                            href: "#",
                            onClick: (e) => {
                              e.preventDefault(),
                                this.props.onCredConfirm(t.meth, t.val);
                            },
                          },
                          n().createElement(l.FormattedMessage, {
                            id: "validate_credential_action",
                            defaultMessage: [{ type: 0, value: "confirm" }],
                          })
                        ),
                    " ",
                    n().createElement(
                      "a",
                      {
                        href: "#",
                        onClick: (e) => {
                          e.preventDefault(),
                            this.props.onCredDelete(t.meth, t.val);
                        },
                      },
                      n().createElement(
                        "i",
                        { className: "material-icons gray" },
                        "delete_outline"
                      )
                    )
                  )
                )
              );
            }),
            n().createElement(
              "div",
              { className: "scrollable-panel" },
              n().createElement(
                "div",
                { className: "panel-form-row" },
                n().createElement(
                  "div",
                  { className: "panel-form-column" },
                  n().createElement(
                    "label",
                    { className: "small" },
                    n().createElement(l.FormattedMessage, {
                      id: "label_your_name",
                      defaultMessage: [{ type: 0, value: "Your name" }],
                    })
                  ),
                  n().createElement(
                    "div",
                    null,
                    n().createElement(
                      l.FormattedMessage,
                      {
                        id: "full_name_prompt",
                        defaultMessage: [
                          { type: 0, value: "Full name, e.g. John Doe" },
                        ],
                      },
                      (e) =>
                        n().createElement(ue, {
                          placeholder: e,
                          value: this.state.fullName,
                          onFinished: this.handleFullNameUpdate,
                        })
                    )
                  )
                ),
                n().createElement(q, {
                  avatar: this.state.avatar,
                  uid: this.props.myUserId,
                  title: this.state.fullName,
                  onImageChanged: this.handleImageChanged,
                  onError: this.props.onError,
                })
              ),
              n().createElement("div", { className: "hr" }),
              n().createElement(
                l.FormattedMessage,
                {
                  id: "title_tag_manager",
                  defaultMessage: [{ type: 0, value: "Tags (user discovery)" }],
                },
                (e) =>
                  n().createElement(fe, {
                    title: e,
                    activated: !1,
                    tags: this.state.tags,
                    tinode: this.props.tinode,
                    onSubmit: this.handleTagsUpdated,
                  })
              ),
              n().createElement("div", { className: "hr" }),
              n().createElement(
                "div",
                { className: "panel-form-column" },
                n().createElement(
                  "label",
                  { className: "small" },
                  n().createElement(l.FormattedMessage, {
                    id: "label_user_contacts",
                    defaultMessage: [{ type: 0, value: "Contacts:" }],
                  })
                ),
                n().createElement(
                  "div",
                  { className: "quoted" },
                  e,
                  this.state.addCredActive
                    ? n().createElement("input", {
                        type: "text",
                        value: this.state.value,
                        className: this.state.addCredInvalid ? "invalid" : null,
                        placeholder: "Phone number or email",
                        required: "required",
                        autoFocus: !0,
                        onChange: this.handleCredChange,
                        onKeyDown: this.handleCredKeyDown,
                        onBlur: this.handleCredEntered,
                      })
                    : null,
                  n().createElement(
                    "div",
                    null,
                    n().createElement(
                      "a",
                      {
                        href: "#",
                        onClick: (e) => {
                          e.preventDefault(),
                            this.setState({ addCredActive: !0 });
                        },
                      },
                      n().createElement(
                        "i",
                        { className: "material-icons" },
                        "add"
                      ),
                      n().createElement(l.FormattedMessage, {
                        id: "button_add_another",
                        defaultMessage: [{ type: 0, value: "Add another" }],
                      })
                    )
                  )
                )
              )
            )
          );
        }
      }
      class et extends n().PureComponent {
        constructor(e) {
          super(e),
            (this.handleCheckboxClick = this.handleCheckboxClick.bind(this));
        }
        handleCheckboxClick(e, t) {
          "sound" == e
            ? this.props.onToggleMessageSounds(t)
            : "alert" == e
            ? this.props.onTogglePushNotifications(t)
            : "incognito" == e && this.props.onToggleIncognitoMode(t);
        }
        render() {
          return n().createElement(
            "div",
            { className: "scrollable-panel" },
            n().createElement(
              "div",
              { className: "panel-form-row" },
              n().createElement(
                "label",
                { htmlFor: "message-sound" },
                n().createElement(l.FormattedMessage, {
                  id: "label_message_sound",
                  defaultMessage: [{ type: 0, value: "Message sound:" }],
                })
              ),
              n().createElement(z, {
                name: "sound",
                id: "message-sound",
                checked: this.props.messageSounds,
                onChange: this.handleCheckboxClick,
              })
            ),
            n().createElement(
              "div",
              { className: "panel-form-row" },
              n().createElement(
                "label",
                { htmlFor: "desktop-alerts" },
                this.props.desktopAlertsEnabled
                  ? n().createElement(l.FormattedMessage, {
                      id: "label_push_notifications",
                      defaultMessage: [
                        { type: 0, value: "Notification alerts:" },
                      ],
                    })
                  : n().createElement(l.FormattedMessage, {
                      id: "label_push_notifications_disabled",
                      defaultMessage: [
                        {
                          type: 0,
                          value: "Notification alerts (requires HTTPS):",
                        },
                      ],
                    })
              ),
              n().createElement(z, {
                name: "alert",
                id: "desktop-alerts",
                checked: this.props.desktopAlerts,
                onChange: this.props.desktopAlertsEnabled
                  ? this.handleCheckboxClick
                  : null,
              })
            ),
            n().createElement(
              "div",
              { className: "panel-form-row" },
              n().createElement(
                "label",
                { htmlFor: "incognito-mode" },
                n().createElement(l.FormattedMessage, {
                  id: "label_incognito_mode",
                  defaultMessage: [{ type: 0, value: "Incognito mode:" }],
                })
              ),
              n().createElement(z, {
                name: "incognito",
                id: "incognito-mode",
                checked: this.props.incognitoMode,
                onChange: this.handleCheckboxClick,
              })
            )
          );
        }
      }
      const tt = (0, l.defineMessages)({
        delete_account: {
          id: "delete_account",
          defaultMessage: [{ type: 0, value: "Delete account" }],
        },
        delete_account_warning: {
          id: "delete_account_arning",
          defaultMessage: [
            {
              type: 0,
              value:
                "Are you sure you want to delete your account? It cannot be undone.",
            },
          ],
        },
      });
      class st extends n().Component {
        constructor(e) {
          super(e);
          const t = this.props.tinode.getMeTopic();
          let s = 0;
          t.contacts((e) => {
            e.acs && !e.acs.isJoiner() && s++;
          });
          const a = t.getDefaultAccess();
          (this.state = {
            auth: a ? a.auth : null,
            anon: a ? a.anon : null,
            showPermissionEditorFor: void 0,
            blockedCount: s,
          }),
            (this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this)),
            (this.handleLaunchPermissionsEditor =
              this.handleLaunchPermissionsEditor.bind(this)),
            (this.handleHidePermissionsEditor =
              this.handleHidePermissionsEditor.bind(this)),
            (this.handlePermissionsChanged =
              this.handlePermissionsChanged.bind(this)),
            (this.handleDeleteAccount = this.handleDeleteAccount.bind(this));
        }
        handlePasswordUpdate(e) {
          this.setState({ password: e }), this.props.onUpdateAccount(e);
        }
        handleLaunchPermissionsEditor(e) {
          this.setState({
            showPermissionEditorFor: e,
            editedPermissions: this.state[e],
          });
        }
        handleHidePermissionsEditor() {
          this.setState({ showPermissionEditorFor: void 0 });
        }
        handlePermissionsChanged(e) {
          let t = {};
          (t[this.state.showPermissionEditorFor] = e),
            this.props.onUpdateAccount(void 0, void 0, t);
          let s = { showPermissionEditorFor: void 0 };
          (s[this.state.showPermissionEditorFor] = e), this.setState(s);
        }
        handleDeleteAccount(e) {
          e.preventDefault();
          const { formatMessage: t } = this.props.intl;
          this.props.onShowAlert(
            t(tt.delete_account),
            t(tt.delete_account_warning),
            () => {
              this.props.onDeleteAccount();
            },
            null,
            !0,
            null
          );
        }
        render() {
          return n().createElement(
            n().Fragment,
            null,
            this.state.showPermissionEditorFor
              ? n().createElement(ve, {
                  mode: this.state.editedPermissions,
                  skip: "O",
                  onSubmit: this.handlePermissionsChanged,
                  onCancel: this.handleHidePermissionsEditor,
                })
              : n().createElement(
                  "div",
                  { className: "scrollable-panel" },
                  n().createElement(
                    "div",
                    { className: "panel-form-column" },
                    n().createElement(
                      "label",
                      { className: "small" },
                      n().createElement(l.FormattedMessage, {
                        id: "label_password",
                        defaultMessage: [{ type: 0, value: "Password" }],
                      })
                    ),
                    n().createElement(
                      "div",
                      null,
                      n().createElement(
                        l.FormattedMessage,
                        {
                          id: "password_unchanged_prompt",
                          defaultMessage: [{ type: 0, value: "Unchanged" }],
                        },
                        (e) =>
                          n().createElement(ue, {
                            placeholder: e,
                            type: "password",
                            onFinished: this.handlePasswordUpdate,
                          })
                      )
                    )
                  ),
                  n().createElement("div", { className: "hr" }),
                  n().createElement(
                    "div",
                    { className: "panel-form-column" },
                    n().createElement(
                      "a",
                      {
                        href: "#",
                        className: "danger flat-button",
                        onClick: (e) => {
                          e.preventDefault(), this.props.onLogout();
                        },
                      },
                      n().createElement(
                        "i",
                        { className: "material-icons" },
                        "exit_to_app"
                      ),
                      "  ",
                      n().createElement(l.FormattedMessage, {
                        id: "button_logout",
                        defaultMessage: [{ type: 0, value: "Logout" }],
                      })
                    ),
                    n().createElement(
                      "a",
                      {
                        href: "#",
                        className: "danger flat-button",
                        onClick: (e) => {
                          this.handleDeleteAccount(e);
                        },
                      },
                      n().createElement(
                        "i",
                        { className: "material-icons" },
                        "delete"
                      ),
                      "  ",
                      n().createElement(l.FormattedMessage, {
                        id: "button_delete_account",
                        defaultMessage: [{ type: 0, value: "Delete account" }],
                      })
                    )
                  ),
                  n().createElement("div", { className: "hr" }),
                  n().createElement(
                    "div",
                    { className: "panel-form-column" },
                    n().createElement(
                      "div",
                      null,
                      n().createElement(
                        "label",
                        { className: "small" },
                        n().createElement(l.FormattedMessage, {
                          id: "label_default_access_mode",
                          defaultMessage: [
                            { type: 0, value: "Default access mode:" },
                          ],
                        })
                      )
                    ),
                    n().createElement(
                      "div",
                      { className: "quoted" },
                      n().createElement(
                        "div",
                        null,
                        "Auth: ",
                        n().createElement(
                          "tt",
                          {
                            className: "clickable",
                            onClick: this.handleLaunchPermissionsEditor.bind(
                              this,
                              "auth"
                            ),
                          },
                          this.state.auth
                        )
                      ),
                      n().createElement(
                        "div",
                        null,
                        "Anon: ",
                        n().createElement(
                          "tt",
                          {
                            className: "clickable",
                            onClick: this.handleLaunchPermissionsEditor.bind(
                              this,
                              "anon"
                            ),
                          },
                          this.state.anon
                        )
                      )
                    )
                  ),
                  this.state.blockedCount > 0
                    ? n().createElement(
                        n().Fragment,
                        null,
                        n().createElement("div", { className: "hr" }),
                        n().createElement(
                          "div",
                          { className: "panel-form-row" },
                          n().createElement(
                            "i",
                            { className: "material-icons" },
                            "block"
                          ),
                          " ",
                          n().createElement(
                            "a",
                            {
                              href: "#",
                              className: "gray",
                              onClick: (e) => {
                                e.preventDefault(), this.props.onShowBlocked();
                              },
                            },
                            n().createElement(l.FormattedMessage, {
                              id: "blocked_contacts_link",
                              defaultMessage: [
                                { type: 0, value: "Blocked contacts (" },
                                { type: 1, value: "count" },
                                { type: 0, value: ")" },
                              ],
                              values: { count: this.state.blockedCount },
                            })
                          )
                        )
                      )
                    : null
                )
          );
        }
      }
      const at = (0, l.injectIntl)(st);
      class nt extends n().PureComponent {
        render() {
          return n().createElement(
            "div",
            { className: "scrollable-panel" },
            n().createElement(
              "div",
              { className: "panel-form-column" },
              n().createElement(
                "a",
                {
                  href: "email:support@tinode.co",
                  className: "flat-button",
                  target: "_blank",
                },
                n().createElement(
                  "i",
                  { className: "material-icons" },
                  "email"
                ),
                "  ",
                n().createElement(l.FormattedMessage, {
                  id: "link_contact_us",
                  defaultMessage: [{ type: 0, value: "Contact Us" }],
                })
              ),
              n().createElement(
                "a",
                {
                  href: "https://tinode.co/terms.html",
                  className: "flat-button",
                  target: "_blank",
                },
                n().createElement(
                  "i",
                  { className: "material-icons" },
                  "description"
                ),
                "  ",
                n().createElement(l.FormattedMessage, {
                  id: "link_terms_of_service",
                  defaultMessage: [{ type: 0, value: "Terms of Service" }],
                })
              ),
              n().createElement(
                "a",
                {
                  href: "https://tinode.co/privacy.html",
                  className: "flat-button",
                  target: "_blank",
                },
                n().createElement(
                  "i",
                  { className: "material-icons" },
                  "policy"
                ),
                "  ",
                n().createElement(l.FormattedMessage, {
                  id: "link_privacy_policy",
                  defaultMessage: [{ type: 0, value: "Privacy Policy" }],
                })
              )
            ),
            n().createElement("div", { className: "hr" }),
            n().createElement(
              "div",
              { className: "panel-form-column" },
              n().createElement(
                "div",
                { className: "panel-form-row" },
                n().createElement(
                  "label",
                  { className: "small" },
                  n().createElement(l.FormattedMessage, {
                    id: "label_client",
                    defaultMessage: [{ type: 0, value: "Client:" }],
                  })
                ),
                u
              ),
              n().createElement(
                "div",
                { className: "panel-form-row" },
                n().createElement(
                  "label",
                  { className: "small" },
                  n().createElement(l.FormattedMessage, {
                    id: "label_sdk",
                    defaultMessage: [{ type: 0, value: "SDK:" }],
                  })
                ),
                h().getLibrary()
              ),
              n().createElement(
                "div",
                { className: "panel-form-row" },
                n().createElement(
                  "label",
                  { className: "small" },
                  n().createElement(l.FormattedMessage, {
                    id: "label_server",
                    defaultMessage: [{ type: 0, value: "Server:" }],
                  })
                ),
                this.props.serverVersion
              ),
              n().createElement(
                "div",
                { className: "panel-form-row" },
                n().createElement(
                  "label",
                  { className: "small" },
                  n().createElement(l.FormattedMessage, {
                    id: "label_server_address",
                    defaultMessage: [{ type: 0, value: "Server address:" }],
                  })
                ),
                this.props.serverAddress
              )
            )
          );
        }
      }
      class it extends n().Component {
        constructor(e) {
          super(e),
            (this.state = {
              login: e.login,
              password: "",
              token: null,
              id_device: null,
              hostName: e.serverAddress,
              saveToken: e.persist,
            }),
            (this.handleLoginChange = this.handleLoginChange.bind(this)),
            (this.handlePasswordChange = this.handlePasswordChange.bind(this)),
            (this.handleTokenChange = this.handleTokenChange.bind(this)),
            (this.handleIdDeviceChange = this.handleIdDeviceChange.bind(this)),
            (this.handleToggleSaveToken =
              this.handleToggleSaveToken.bind(this)),
            (this.handleSubmit = this.handleSubmit.bind(this));
        }
        handleLoginChange(e) {
          console.log("user on change: ", e.target.value),
            this.setState({ login: e.target.value });
        }
        handlePasswordChange(e) {
          this.setState({ password: e.target.value });
        }
        handleTokenChange(e) {
          console.log("token on change: ", e.target.value),
            this.setState({ token: e.target.value }),
            localStorage.setItem("access_token", e.target.value),
            localStorage.setItem("auth-token", e.target.value);
        }
        handleIdDeviceChange(e) {
          console.log("id_device on change: ", e.target.value),
            this.setState({ id_device: e.target.value }),
            localStorage.setItem("id_device", e.target.value);
        }
        handleToggleSaveToken() {
          this.props.onPersistenceChange(!this.state.saveToken),
            this.setState({ saveToken: !this.state.saveToken });
        }
        handleSubmit(e) {
          e.preventDefault(),
            this.props.onLogin(
              this.state.login.trim(),
              this.state.password.trim(),
              this.state.token.trim(),
              this.state.id_device.trim()
            );
        }
        render() {
          let e = "primary";
          return (
            this.props.disabled && (e += " disabled"),
            n().createElement(
              "form",
              { id: "login-form", onSubmit: this.handleSubmit },
              n().createElement(
                l.FormattedMessage,
                {
                  id: "login_prompt",
                  defaultMessage: [{ type: 0, value: "Login" }],
                },
                (e) =>
                  n().createElement("input", {
                    type: "text",
                    id: "inputLogin",
                    placeholder: e,
                    autoComplete: "username",
                    autoCorrect: "off",
                    autoCapitalize: "none",
                    value: this.state.login,
                    onChange: this.handleLoginChange,
                    required: !0,
                    autoFocus: !0,
                  })
              ),
              n().createElement(
                l.FormattedMessage,
                {
                  id: "password_prompt",
                  defaultMessage: [{ type: 0, value: "Password" }],
                },
                (e) =>
                  n().createElement(me, {
                    type: "password",
                    id: "inputPassword",
                    placeholder: e,
                    autoComplete: "current-password",
                    value: this.state.password,
                    onChange: this.handlePasswordChange,
                    required: !0,
                  })
              ),
              n().createElement(
                l.FormattedMessage,
                {
                  id: "token_prompt",
                  defaultMessage: [{ type: 0, value: "Token" }],
                },
                (e) =>
                  n().createElement("input", {
                    type: "text",
                    id: "inputToken",
                    placeholder: e,
                    autoComplete: "token",
                    autoCorrect: "off",
                    autoCapitalize: "none",
                    value: this.state.token,
                    onChange: this.handleTokenChange,
                    required: !0,
                    autoFocus: !0,
                  })
              ),
              n().createElement(
                l.FormattedMessage,
                {
                  id: "id_device_prompt",
                  defaultMessage: [{ type: 0, value: "ID Device" }],
                },
                (e) =>
                  n().createElement("input", {
                    type: "text",
                    id: "inputIdDevice",
                    placeholder: e,
                    autoComplete: "id_device",
                    autoCorrect: "off",
                    autoCapitalize: "none",
                    value: this.state.id_device,
                    onChange: this.handleIdDeviceChange,
                    required: !0,
                    autoFocus: !0,
                  })
              ),
              n().createElement(
                "div",
                { className: "panel-form-row" },
                n().createElement(z, {
                  id: "save-token",
                  name: "save-token",
                  checked: this.state.saveToken,
                  onChange: this.handleToggleSaveToken,
                }),
                n().createElement(
                  "label",
                  { htmlFor: "save-token" },
                  " ",
                  n().createElement(l.FormattedMessage, {
                    id: "stay_logged_in",
                    defaultMessage: [{ type: 0, value: "Stay logged in" }],
                  })
                ),
                n().createElement(
                  "a",
                  { href: "#reset" },
                  n().createElement(l.FormattedMessage, {
                    id: "forgot_password_link",
                    defaultMessage: [{ type: 0, value: "Forgot password?" }],
                  })
                )
              ),
              n().createElement(
                "div",
                { className: "dialog-buttons" },
                n().createElement(
                  "button",
                  { className: e, type: "submit" },
                  n().createElement(l.FormattedMessage, {
                    id: "button_sign_in",
                    defaultMessage: [{ type: 0, value: "Sign in" }],
                  })
                )
              )
            )
          );
        }
      }
      const ot = (0, l.defineMessages)({
        invalid_id: {
          id: "error_invalid_id",
          defaultMessage: [{ type: 0, value: "Invalid ID" }],
        },
      });
      class lt extends n().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { groupId: "" }),
            (this.handleChange = this.handleChange.bind(this)),
            (this.handleKeyPress = this.handleKeyPress.bind(this)),
            (this.handleSubmit = this.handleSubmit.bind(this));
        }
        handleChange(e) {
          this.setState({ groupId: e.target.value });
        }
        handleKeyPress(e) {
          "Enter" === e.key && this.handleSubmit(e);
        }
        handleSubmit(e) {
          if ((e.preventDefault(), this.state.groupId)) {
            const e = this.state.groupId.trim(),
              t = e.substr(0, 3);
            e.length > 3 && ["usr", "grp", "chn"].includes(t)
              ? this.props.onSubmit(e)
              : this.props.onError(
                  this.props.intl.formatMessage(ot.invalid_id),
                  "err"
                );
          }
        }
        render() {
          return n().createElement(
            "div",
            { className: "panel-form" },
            n().createElement(
              "div",
              { className: "panel-form-row" },
              n().createElement(
                l.FormattedMessage,
                {
                  id: "group_user_id_prompt",
                  defaultMessage: [{ type: 0, value: "Group or User ID" }],
                },
                (e) =>
                  n().createElement("input", {
                    type: "text",
                    placeholder: e,
                    value: this.state.groupId,
                    onChange: this.handleChange,
                    onKeyPress: this.handleKeyPress,
                    required: !0,
                    autoFocus: !0,
                  })
              )
            ),
            n().createElement(
              "div",
              { className: "dialog-buttons" },
              n().createElement(
                "button",
                { className: "primary", onClick: this.handleSubmit },
                n().createElement(l.FormattedMessage, {
                  id: "button_subscribe",
                  defaultMessage: [{ type: 0, value: "Subscribe" }],
                })
              )
            )
          );
        }
      }
      const rt = (0, l.injectIntl)(lt);
      class ct extends n().PureComponent {
        constructor(e) {
          super(e),
            (this.state = {
              fn: "",
              private: "",
              imageDataUrl: null,
              tags: [],
              isChannel: !1,
            }),
            (this.handleFnChange = this.handleFnChange.bind(this)),
            (this.handlePrivateChange = this.handlePrivateChange.bind(this)),
            (this.handleImageChanged = this.handleImageChanged.bind(this)),
            (this.handleTagsChanged = this.handleTagsChanged.bind(this)),
            (this.handleChannelToggle = this.handleChannelToggle.bind(this)),
            (this.handleSubmit = this.handleSubmit.bind(this));
        }
        handleFnChange(e) {
          this.setState({ fn: e.target.value });
        }
        handlePrivateChange(e) {
          this.setState({ private: e.target.value });
        }
        handleImageChanged(e) {
          this.setState({ imageDataUrl: e });
        }
        handleTagsChanged(e) {
          this.setState({ tags: e });
        }
        handleChannelToggle() {
          this.setState({ isChannel: !this.state.isChannel });
        }
        handleSubmit(e) {
          e.preventDefault();
          const t = this.state.fn.trim().substring(0, S),
            s = this.state.private.trim().substring(0, S);
          t &&
            this.props.onSubmit(
              t,
              this.state.imageDataUrl,
              s,
              this.state.tags,
              this.state.isChannel
            );
        }
        render() {
          let e = "primary";
          return (
            this.props.disabled && (e += " disabled"),
            n().createElement(
              "form",
              { className: "panel-form", onSubmit: this.handleSubmit },
              n().createElement(
                "div",
                { className: "panel-form-row" },
                n().createElement(
                  "div",
                  { className: "panel-form-column" },
                  n().createElement(
                    "label",
                    { className: "small", htmlFor: "new-topic-fn" },
                    n().createElement(l.FormattedMessage, {
                      id: "label_topic_name",
                      defaultMessage: [{ type: 0, value: "Name" }],
                    })
                  ),
                  n().createElement(
                    l.FormattedMessage,
                    {
                      id: "topic_name_editing_placeholder",
                      defaultMessage: [
                        { type: 0, value: "Freeform name of the group" },
                      ],
                    },
                    (e) =>
                      n().createElement("input", {
                        type: "text",
                        id: "new-topic-fn",
                        placeholder: e,
                        value: this.state.fn,
                        onChange: this.handleFnChange,
                        autoFocus: !0,
                        required: !0,
                      })
                  ),
                  n().createElement("br", null),
                  n().createElement(
                    "label",
                    { className: "small", htmlFor: "new-topic-priv" },
                    n().createElement(l.FormattedMessage, {
                      id: "label_private",
                      defaultMessage: [{ type: 0, value: "Private comment" }],
                    })
                  ),
                  n().createElement(
                    l.FormattedMessage,
                    {
                      id: "private_editing_placeholder",
                      defaultMessage: [
                        { type: 0, value: "Visible to you only" },
                      ],
                    },
                    (e) =>
                      n().createElement("input", {
                        type: "text",
                        id: "new-topic-priv",
                        placeholder: e,
                        value: this.state.private,
                        onChange: this.handlePrivateChange,
                      })
                  )
                ),
                n().createElement(q, {
                  onError: this.props.onError,
                  onImageChanged: this.handleImageChanged,
                })
              ),
              n().createElement(
                "div",
                { className: "panel-form-row" },
                n().createElement(z, {
                  checked: this.state.isChannel,
                  onChange: this.handleChannelToggle,
                }),
                " ",
                n().createElement(
                  "label",
                  { onClick: this.handleChannelToggle },
                  n().createElement(l.FormattedMessage, {
                    id: "channel_prompt",
                    defaultMessage: [{ type: 0, value: "This is a channel" }],
                  })
                )
              ),
              n().createElement(
                l.FormattedMessage,
                {
                  id: "title_tag_manager",
                  defaultMessage: [{ type: 0, value: "Tags (user discovery)" }],
                },
                (e) =>
                  n().createElement(fe, {
                    tags: this.state.tags,
                    activated: !0,
                    onTagsChanged: this.handleTagsChanged,
                    tinode: this.props.tinode,
                    title: e,
                  })
              ),
              n().createElement(
                "div",
                { className: "dialog-buttons" },
                n().createElement(
                  "button",
                  { className: e },
                  n().createElement(l.FormattedMessage, {
                    id: "button_create",
                    defaultMessage: [{ type: 0, value: "Create" }],
                  })
                )
              )
            )
          );
        }
      }
      class dt extends n().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { edited: !1, search: "" }),
            (this.handleSearchChange = this.handleSearchChange.bind(this)),
            (this.handleSearch = this.handleSearch.bind(this)),
            (this.handleClear = this.handleClear.bind(this)),
            (this.handleKeyDown = this.handleKeyDown.bind(this));
        }
        componentWillUnmount() {
          this.state.edited &&
            (this.setState({ search: "", edited: !1 }),
            this.props.onSearchContacts(h().DEL_CHAR));
        }
        handleSearchChange(e) {
          this.setState({ search: e.target.value });
        }
        handleSearch(e) {
          e.preventDefault();
          var t = this.state.search.trim();
          this.setState({ edited: t.length > 0 }),
            this.props.onSearchContacts(t.length > 0 ? t : h().DEL_CHAR);
        }
        handleClear(e) {
          e.preventDefault(),
            this.state.edited && this.props.onSearchContacts(h().DEL_CHAR),
            this.setState({ search: "", edited: !1 });
        }
        handleKeyDown(e) {
          "Enter" === e.key
            ? this.handleSearch(e)
            : "Escape" === e.key && this.handleClear();
        }
        render() {
          return n().createElement(
            "div",
            { className: "panel-form" },
            n().createElement(
              "div",
              { className: "panel-form-row" },
              n().createElement(
                "i",
                { className: "material-icons search" },
                "search"
              ),
              n().createElement(
                l.FormattedMessage,
                {
                  id: "search_placeholder",
                  defaultMessage: [
                    {
                      type: 0,
                      value:
                        "List like email:alice@example.com, tel:17025550003...",
                    },
                  ],
                },
                (e) =>
                  n().createElement("input", {
                    className: "search",
                    type: "text",
                    placeholder: e,
                    value: this.state.search,
                    onChange: this.handleSearchChange,
                    onKeyDown: this.handleKeyDown,
                    required: !0,
                    autoFocus: !0,
                  })
              ),
              n().createElement(
                "a",
                { href: "#", onClick: this.handleClear },
                n().createElement("i", { className: "material-icons" }, "close")
              )
            )
          );
        }
      }
      const ht = (0, l.defineMessages)({
        search_for_contacts: {
          id: "search_for_contacts",
          defaultMessage: [{ type: 0, value: "Use search to find contacts" }],
        },
        search_no_results: {
          id: "search_no_results",
          defaultMessage: [{ type: 0, value: "Search returned no results" }],
        },
      });
      class pt extends n().Component {
        constructor(e) {
          super(e),
            (this.state = { tabSelected: "p2p", searchQuery: null }),
            (this.handleTabClick = this.handleTabClick.bind(this)),
            (this.handleSearchContacts = this.handleSearchContacts.bind(this)),
            (this.handleContactSelected =
              this.handleContactSelected.bind(this)),
            (this.handleNewGroupSubmit = this.handleNewGroupSubmit.bind(this)),
            (this.handleGroupByID = this.handleGroupByID.bind(this));
        }
        componentDidMount() {
          this.props.onInitFind();
        }
        handleTabClick(e) {
          e.preventDefault(),
            Le.navigateTo(
              Le.addUrlParam(
                window.location.hash,
                "tab",
                e.currentTarget.dataset.id
              )
            ),
            this.setState({ tabSelected: e.currentTarget.dataset.id });
        }
        handleSearchContacts(e) {
          this.props.onSearchContacts(e),
            this.setState({ searchQuery: h().isNullValue(e) ? null : e });
        }
        handleContactSelected(e) {
          "p2p" === this.state.tabSelected &&
            (Le.navigateTo(Le.removeUrlParam(window.location.hash, "tab")),
            this.props.onCreateTopic(e));
        }
        handleNewGroupSubmit(e, t, s, a, n) {
          Le.navigateTo(Le.removeUrlParam(window.location.hash, "tab")),
            this.props.onCreateTopic(void 0, H(e, t), s, a, n);
        }
        handleGroupByID(e) {
          Le.navigateTo(Le.removeUrlParam(window.location.hash, "tab")),
            this.props.onCreateTopic(e);
        }
        render() {
          const { formatMessage: e } = this.props.intl,
            t = e(
              this.state.searchQuery
                ? ht.search_no_results
                : ht.search_for_contacts
            );
          return n().createElement(
            "div",
            { className: "flex-column" },
            n().createElement(
              "ul",
              { className: "tabbar" },
              n().createElement(
                "li",
                {
                  className: "p2p" === this.state.tabSelected ? "active" : null,
                },
                n().createElement(
                  "a",
                  { href: "#", "data-id": "p2p", onClick: this.handleTabClick },
                  n().createElement(l.FormattedMessage, {
                    id: "tabtitle_find_user",
                    defaultMessage: [{ type: 0, value: "find" }],
                  })
                )
              ),
              n().createElement(
                "li",
                {
                  className: "grp" === this.state.tabSelected ? "active" : null,
                },
                n().createElement(
                  "a",
                  { href: "#", "data-id": "grp", onClick: this.handleTabClick },
                  n().createElement(l.FormattedMessage, {
                    id: "tabtitle_new_group",
                    defaultMessage: [{ type: 0, value: "new group" }],
                  })
                )
              ),
              n().createElement(
                "li",
                {
                  className:
                    "byid" === this.state.tabSelected ? "active" : null,
                },
                n().createElement(
                  "a",
                  {
                    href: "#",
                    "data-id": "byid",
                    onClick: this.handleTabClick,
                  },
                  n().createElement(l.FormattedMessage, {
                    id: "tabtitle_group_by_id",
                    defaultMessage: [{ type: 0, value: "by id" }],
                  })
                )
              )
            ),
            "grp" === this.state.tabSelected
              ? n().createElement(ct, {
                  tinode: this.props.tinode,
                  onSubmit: this.handleNewGroupSubmit,
                })
              : "byid" === this.state.tabSelected
              ? n().createElement(rt, {
                  onSubmit: this.handleGroupByID,
                  onError: this.props.onError,
                })
              : n().createElement(
                  "div",
                  { className: "flex-column" },
                  n().createElement(dt, {
                    type: "p2p",
                    onSearchContacts: this.handleSearchContacts,
                  }),
                  n().createElement(ie, {
                    contacts: this.props.searchResults,
                    myUserId: this.props.myUserId,
                    emptyListMessage: t,
                    showOnline: !1,
                    showUnread: !1,
                    showContextMenu: !1,
                    onTopicSelected: this.handleContactSelected,
                  })
                )
          );
        }
      }
      const mt = (0, l.injectIntl)(pt);
      class ut extends n().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { email: "", password: "", sent: !1 }),
            (this.handleSubmit = this.handleSubmit.bind(this)),
            (this.handleEmailChange = this.handleEmailChange.bind(this)),
            (this.handlePasswordChange = this.handlePasswordChange.bind(this));
        }
        componentDidMount() {
          const e = Le.parseUrlHash(window.location.hash);
          this.setState({ token: e.params.token, scheme: e.params.scheme });
        }
        handleSubmit(e) {
          if ((e.preventDefault(), this.state.token))
            this.props.onReset(
              this.state.scheme,
              this.state.password.trim(),
              this.state.token
            );
          else if (this.state.sent) this.props.onCancel();
          else {
            const e = this.state.email.trim();
            this.setState({ email: e }),
              this.props.onRequest("email", e).then(() => {
                this.setState({ sent: !0 });
              });
          }
        }
        handleEmailChange(e) {
          this.setState({ email: e.target.value });
        }
        handlePasswordChange(e) {
          this.setState({ password: e.target.value });
        }
        render() {
          return n().createElement(
            "form",
            { id: "password-reset-form", onSubmit: this.handleSubmit },
            this.state.token && this.state.scheme
              ? n().createElement(
                  l.FormattedMessage,
                  {
                    id: "new_password_placeholder",
                    defaultMessage: [{ type: 0, value: "Enter new password" }],
                  },
                  (e) =>
                    n().createElement(me, {
                      placeholder: e,
                      autoComplete: "new-password",
                      value: this.state.password,
                      required: !0,
                      autoFocus: !0,
                      onChange: this.handlePasswordChange,
                    })
                )
              : this.state.sent
              ? n().createElement(
                  n().Fragment,
                  null,
                  n().createElement("br", null),
                  n().createElement(
                    "center",
                    null,
                    n().createElement(
                      "i",
                      { className: "material-icons huge green" },
                      "task_alt"
                    )
                  ),
                  n().createElement("br", null),
                  n().createElement(
                    "center",
                    null,
                    n().createElement(l.FormattedMessage, {
                      id: "password_reset_email_sent",
                      defaultMessage: [
                        { type: 0, value: "An email has been sent to " },
                        { type: 1, value: "email" },
                        {
                          type: 0,
                          value:
                            ". Follow the directions in the email to reset your password.",
                        },
                      ],
                      values: {
                        email: n().createElement("tt", null, this.state.email),
                      },
                    })
                  )
                )
              : n().createElement(
                  n().Fragment,
                  null,
                  n().createElement(
                    "label",
                    { htmlFor: "inputEmail" },
                    n().createElement(l.FormattedMessage, {
                      id: "label_reset_password",
                      defaultMessage: [
                        { type: 0, value: "Send a password reset email:" },
                      ],
                    })
                  ),
                  n().createElement(
                    l.FormattedMessage,
                    {
                      id: "credential_email_prompt",
                      defaultMessage: [
                        { type: 0, value: "Your registration email" },
                      ],
                    },
                    (e) =>
                      n().createElement("input", {
                        type: "email",
                        id: "inputEmail",
                        placeholder: e,
                        autoComplete: "email",
                        value: this.state.email,
                        onChange: this.handleEmailChange,
                        required: !0,
                        autoFocus: !0,
                      })
                  )
                ),
            n().createElement(
              "div",
              { className: "dialog-buttons" },
              n().createElement(
                "button",
                { className: "primary", type: "submit" },
                this.state.token && this.state.scheme
                  ? n().createElement(l.FormattedMessage, {
                      id: "button_reset",
                      defaultMessage: [{ type: 0, value: "Reset" }],
                    })
                  : this.state.sent
                  ? n().createElement(l.FormattedMessage, {
                      id: "button_ok",
                      defaultMessage: [{ type: 0, value: "OK" }],
                    })
                  : n().createElement(l.FormattedMessage, {
                      id: "button_send_request",
                      defaultMessage: [{ type: 0, value: "Send request" }],
                    })
              )
            )
          );
        }
      }
      class _t extends n().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { hostName: e.serverAddress, changed: !1 }),
            (this.handleHostNameChange = this.handleHostNameChange.bind(this)),
            (this.handleEditingFinished =
              this.handleEditingFinished.bind(this));
        }
        handleHostNameChange(e) {
          this.setState({ hostName: e.target.value, changed: !0 });
        }
        handleEditingFinished() {
          this.state.changed &&
            (this.setState({ changed: !1 }),
            this.props.onServerAddressChange(this.state.hostName.trim()));
        }
        render() {
          var e = [];
          for (let t in _) {
            let s = _[t];
            e.push(n().createElement("option", { key: s, value: s }));
          }
          return n().createElement(
            "div",
            { className: "panel-form-row" },
            n().createElement("input", {
              type: "search",
              id: "host-name",
              placeholder: this.props.hostName,
              list: "known-hosts",
              className: "quoted",
              value: this.state.hostName,
              onChange: this.handleHostNameChange,
              onBlur: this.handleEditingFinished,
              required: !0,
            }),
            n().createElement("datalist", { id: "known-hosts" }, e)
          );
        }
      }
      class gt extends n().PureComponent {
        constructor(e) {
          super(e),
            (this.state = {
              transport: e.transport || "lp",
              serverAddress: e.serverAddress,
            }),
            (this.handleSubmit = this.handleSubmit.bind(this)),
            (this.handleTransportSelected =
              this.handleTransportSelected.bind(this)),
            (this.handleServerAddressChange =
              this.handleServerAddressChange.bind(this));
        }
        handleSubmit(e) {
          e.preventDefault(),
            this.props.onUpdate({
              transport: this.state.transport,
              serverAddress: this.state.serverAddress,
            });
        }
        handleTransportSelected(e) {
          this.setState({ transport: e.currentTarget.value });
        }
        handleServerAddressChange(e) {
          this.setState({ serverAddress: e });
        }
        render() {
          const e = { def: "default", ws: "websocket", lp: "long polling" },
            t = [];
          return (
            ["lp"].map((s) => {
              const a = "transport-" + s,
                i = e[s];
              t.push(
                n().createElement(
                  "li",
                  { key: s },
                  n().createElement("input", {
                    type: "radio",
                    id: a,
                    name: "transport-select",
                    value: s,
                    checked: this.state.transport === s,
                    onChange: this.handleTransportSelected,
                  }),
                  n().createElement("label", { htmlFor: a }, i)
                )
              );
            }),
            n().createElement(
              "form",
              {
                id: "settings-form",
                className: "panel-form",
                onSubmit: this.handleSubmit,
              },
              n().createElement(
                "div",
                { className: "panel-form-row" },
                n().createElement(
                  "label",
                  { className: "small" },
                  n().createElement(l.FormattedMessage, {
                    id: "label_server_to_use",
                    defaultMessage: [{ type: 0, value: "Server to use:" }],
                  })
                )
              ),
              n().createElement(_t, {
                serverAddress: this.state.serverAddress,
                onServerAddressChange: this.handleServerAddressChange,
              }),
              n().createElement(
                "div",
                { className: "panel-form-row" },
                n().createElement(
                  "label",
                  { className: "small" },
                  n().createElement(l.FormattedMessage, {
                    id: "label_wire_transport",
                    defaultMessage: [{ type: 0, value: "Wire transport:" }],
                  })
                )
              ),
              n().createElement(
                "div",
                { className: "panel-form-row" },
                n().createElement("ul", { className: "quoted" }, t)
              ),
              n().createElement(
                "div",
                { className: "dialog-buttons" },
                n().createElement(
                  "button",
                  { type: "submit", className: "primary" },
                  n().createElement(l.FormattedMessage, {
                    id: "button_update",
                    defaultMessage: [{ type: 0, value: "Update" }],
                  })
                )
              )
            )
          );
        }
      }
      const bt = (0, l.defineMessages)({
        phone: {
          id: "phone_dative",
          defaultMessage: [{ type: 0, value: "phone" }],
        },
        email: {
          id: "email_dative",
          defaultMessage: [{ type: 0, value: "email" }],
        },
      });
      class vt extends n().PureComponent {
        constructor(e) {
          super(e),
            (this.state = { code: e.credCode || "" }),
            (this.handleChange = this.handleChange.bind(this)),
            (this.handleKeyPress = this.handleKeyPress.bind(this)),
            (this.handleSubmit = this.handleSubmit.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this));
        }
        handleChange(e) {
          this.setState({ code: e.target.value });
        }
        handleKeyPress(e) {
          "Enter" === e.key
            ? this.handleSubmit(e)
            : "Escape" == e.key && this.handleCancel(e);
        }
        handleSubmit(e) {
          e.preventDefault(),
            this.state.code &&
              this.state.code.trim() &&
              this.props.onSubmit(
                this.props.credMethod,
                this.state.code.trim()
              );
        }
        handleCancel(e) {
          e.preventDefault(), this.props.onCancel();
        }
        render() {
          const { formatMessage: e } = this.props.intl;
          let t =
            { email: e(bt.email), tel: e(bt.phone) }[this.props.credMethod] ||
            this.props.credMethod;
          return n().createElement(
            "div",
            { className: "panel-form" },
            n().createElement(
              "div",
              { className: "panel-form-row" },
              n().createElement(
                "label",
                { className: "small", htmlFor: "enter-confirmation-code" },
                n().createElement(l.FormattedMessage, {
                  id: "enter_confirmation_code_prompt",
                  defaultMessage: [
                    {
                      type: 0,
                      value: "Enter confirmation code sent to you by ",
                    },
                    { type: 1, value: "method" },
                    { type: 0, value: ":" },
                  ],
                  values: { method: t },
                })
              )
            ),
            n().createElement(
              "div",
              { className: "panel-form-row" },
              n().createElement(
                l.FormattedMessage,
                {
                  id: "numeric_confirmation_code_prompt",
                  defaultMessage: [{ type: 0, value: "Numbers only" }],
                },
                (e) =>
                  n().createElement("input", {
                    type: "text",
                    id: "enter-confirmation-code",
                    placeholder: e,
                    value: this.state.code,
                    onChange: this.handleChange,
                    onKeyPress: this.handleKeyPress,
                    required: !0,
                  })
              )
            ),
            n().createElement(
              "div",
              { className: "dialog-buttons" },
              n().createElement(
                "button",
                { className: "primary", onClick: this.handleSubmit },
                n().createElement(l.FormattedMessage, {
                  id: "button_confirm",
                  defaultMessage: [{ type: 0, value: "Confirm" }],
                })
              ),
              n().createElement(
                "button",
                { className: "secondary", onClick: this.handleCancel },
                n().createElement(l.FormattedMessage, {
                  id: "button_cancel",
                  defaultMessage: [{ type: 0, value: "Cancel" }],
                })
              )
            )
          );
        }
      }
      const ft = (0, l.injectIntl)(vt),
        Et = (0, l.defineMessages)({
          login: {
            id: "sidepanel_title_login",
            defaultMessage: [{ type: 0, value: "Sign In" }],
          },
          register: {
            id: "sidepanel_title_register",
            defaultMessage: [{ type: 0, value: "Create Account" }],
          },
          settings: {
            id: "sidepanel_title_settings",
            defaultMessage: [{ type: 0, value: "Settings" }],
          },
          edit: {
            id: "sidepanel_title_account_settings",
            defaultMessage: [{ type: 0, value: "Account Settings" }],
          },
          general: {
            id: "sidepanel_title_acc_general",
            defaultMessage: [{ type: 0, value: "General" }],
          },
          security: {
            id: "sidepanel_title_acc_security",
            defaultMessage: [{ type: 0, value: "Security" }],
          },
          notif: {
            id: "sidepanel_title_acc_notifications",
            defaultMessage: [{ type: 0, value: "Notifications" }],
          },
          support: {
            id: "sidepanel_title_acc_support",
            defaultMessage: [{ type: 0, value: "Support" }],
          },
          newtpk: {
            id: "sidepanel_title_newtpk",
            defaultMessage: [{ type: 0, value: "Start New Chat" }],
          },
          cred: {
            id: "sidepanel_title_cred",
            defaultMessage: [{ type: 0, value: "Confirm Credentials" }],
          },
          reset: {
            id: "sidepanel_title_reset",
            defaultMessage: [{ type: 0, value: "Reset Password" }],
          },
          archive: {
            id: "sidepanel_title_archive",
            defaultMessage: [{ type: 0, value: "Archived Chats" }],
          },
          blocked: {
            id: "sidepanel_title_blocked",
            defaultMessage: [{ type: 0, value: "Blocked Chats" }],
          },
        });
      class wt extends n().Component {
        constructor(e) {
          super(e), (this.handleNewTopic = this.handleNewTopic.bind(this));
        }
        handleNewTopic() {
          this.props.onBasicNavigate("newtpk");
        }
        render() {
          const { formatMessage: e } = this.props.intl,
            t =
              this.props.state || (this.props.myUserId ? "contacts" : "login");
          let s, a, i;
          return (
            "contacts" == t
              ? ((s = this.props.title),
                (a = !this.props.avatar || this.props.avatar))
              : ((s = e(Et[t])), (a = !1)),
            -1 == ["login", "contacts"].indexOf(t) && (i = this.props.onCancel),
            n().createElement(
              "div",
              {
                id: "sidepanel",
                className: this.props.hideSelf ? "nodisplay" : null,
              },
              n().createElement(Ge, {
                state: t,
                title: s,
                avatar: a,
                myUserId: this.props.myUserId,
                onSignUp: this.props.onSignUp,
                onSettings: this.props.onSettings,
                onNewTopic: this.handleNewTopic,
                onCancel: i,
              }),
              n().createElement(le, {
                level: this.props.errorLevel,
                text: this.props.errorText,
                action: this.props.errorAction,
                actionText: this.props.errorActionText,
                onClearError: this.props.onError,
              }),
              n().createElement(xe, { show: this.props.loadSpinnerVisible }),
              "login" === t
                ? n().createElement(it, {
                    login: this.props.login,
                    disabled: this.props.loginDisabled,
                    persist: this.props.persist,
                    onLogin: this.props.onLoginRequest,
                    onPersistenceChange: this.props.onPersistenceChange,
                  })
                : "register" === t
                ? n().createElement(Ze, {
                    onCreateAccount: this.props.onCreateAccount,
                    onCancel: this.props.onCancel,
                    onError: this.props.onError,
                  })
                : "settings" === t
                ? n().createElement(gt, {
                    transport: this.props.transport,
                    serverAddress: this.props.serverAddress,
                    onCancel: this.props.onCancel,
                    onUpdate: this.props.onGlobalSettings,
                  })
                : "edit" === t
                ? n().createElement(Xe, {
                    tinode: this.props.tinode,
                    myUserId: this.props.myUserId,
                    onBasicNavigate: this.props.onBasicNavigate,
                  })
                : "general" === t
                ? n().createElement($e, {
                    tinode: this.props.tinode,
                    myUserId: this.props.myUserId,
                    onUpdateAccount: this.props.onUpdateAccount,
                    onUpdateTags: this.props.onUpdateAccountTags,
                    onCredAdd: this.props.onCredAdd,
                    onCredDelete: this.props.onCredDelete,
                    onCredConfirm: this.props.onCredConfirm,
                    onBasicNavigate: this.props.onBasicNavigate,
                    onError: this.props.onError,
                  })
                : "notif" === t
                ? n().createElement(et, {
                    messageSounds: this.props.messageSounds,
                    desktopAlerts: this.props.desktopAlerts,
                    desktopAlertsEnabled: this.props.desktopAlertsEnabled,
                    incognitoMode: this.props.incognitoMode,
                    onTogglePushNotifications:
                      this.props.onTogglePushNotifications,
                    onToggleMessageSounds: this.props.onToggleMessageSounds,
                    onToggleIncognitoMode: this.props.onToggleIncognitoMode,
                  })
                : "security" === t
                ? n().createElement(at, {
                    tinode: this.props.tinode,
                    onUpdateAccount: this.props.onUpdateAccount,
                    onLogout: this.props.onLogout,
                    onDeleteAccount: this.props.onDeleteAccount,
                    onShowAlert: this.props.onShowAlert,
                    onShowBlocked: this.props.onShowBlocked,
                  })
                : "support" === t
                ? n().createElement(nt, {
                    serverAddress: this.props.serverAddress,
                    serverVersion: this.props.serverVersion,
                  })
                : "contacts" === t || "archive" == t || "blocked" == t
                ? n().createElement(Qe, {
                    tinode: this.props.tinode,
                    myUserId: this.props.myUserId,
                    connected: this.props.connected,
                    topicSelected: this.props.topicSelected,
                    archive: "archive" == t,
                    blocked: "blocked" == t,
                    chatList: this.props.chatList,
                    showContextMenu: this.props.showContextMenu,
                    onTopicSelected: this.props.onTopicSelected,
                    onShowArchive: this.props.onShowArchive,
                  })
                : "newtpk" === t
                ? n().createElement(mt, {
                    tinode: this.props.tinode,
                    searchResults: this.props.searchResults,
                    onInitFind: this.props.onInitFind,
                    onSearchContacts: this.props.onSearchContacts,
                    onCreateTopic: this.props.onCreateTopic,
                    onError: this.props.onError,
                  })
                : "cred" === t
                ? n().createElement(ft, {
                    credCode: this.props.credCode,
                    credMethod: this.props.credMethod,
                    onSubmit: this.props.onValidateCredentials,
                    onCancel: this.props.onCancel,
                    onError: this.props.onError,
                  })
                : "reset" === t
                ? n().createElement(ut, {
                    onRequest: this.props.onPasswordResetRequest,
                    onReset: this.props.onResetPassword,
                  })
                : null
            )
          );
        }
      }
      const Ct = (0, l.injectIntl)(wt);
      function yt() {
        let e = g;
        return (
          "object" == typeof window.location &&
            ("file:" == window.location.protocol ||
            "localhost" == window.location.hostname
              ? (e = _.local)
              : window.location.hostname &&
                (e =
                  window.location.hostname +
                  (window.location.port ? ":" + window.location.port : ""))),
          e
        );
      }
      function St() {
        return (
          "object" == typeof window.location &&
          "https:" == window.location.protocol
        );
      }
      const Mt = new Audio("audio/msg.mp3"),
        kt = (0, l.defineMessages)({
          reconnect_countdown: {
            id: "reconnect_countdown",
            defaultMessage: [
              { type: 0, value: "Disconnected. Reconnecting in " },
              { type: 1, value: "seconds" },
              { type: 0, value: "…" },
            ],
          },
          reconnect_now: {
            id: "reconnect_now",
            defaultMessage: [{ type: 0, value: "Try now" }],
          },
          push_init_failed: {
            id: "push_init_failed",
            defaultMessage: [
              { type: 0, value: "Failed to initialize push notifications" },
            ],
          },
          invalid_security_token: {
            id: "invalid_security_token",
            defaultMessage: [{ type: 0, value: "Invalid security token" }],
          },
          no_connection: {
            id: "no_connection",
            defaultMessage: [{ type: 0, value: "No connection" }],
          },
          code_doesnot_match: {
            id: "code_doesnot_match",
            defaultMessage: [{ type: 0, value: "Code does not match" }],
          },
          menu_item_info: {
            id: "menu_item_info",
            defaultMessage: [{ type: 0, value: "Info" }],
          },
        });
      class Tt extends n().Component {
        constructor(e) {
          super(e),
            (this.state = this.getBlankState()),
            (this.handleResize = this.handleResize.bind(this)),
            (this.handleHashRoute = this.handleHashRoute.bind(this)),
            (this.handleOnline = this.handleOnline.bind(this)),
            (this.checkForAppUpdate = this.checkForAppUpdate.bind(this)),
            (this.handleVisibilityEvent =
              this.handleVisibilityEvent.bind(this)),
            (this.handleError = this.handleError.bind(this)),
            (this.handleLoginRequest = this.handleLoginRequest.bind(this)),
            (this.handlePersistenceChange =
              this.handlePersistenceChange.bind(this)),
            (this.handleConnected = this.handleConnected.bind(this)),
            (this.handleAutoreconnectIteration =
              this.handleAutoreconnectIteration.bind(this)),
            (this.doLogin = this.doLogin.bind(this)),
            (this.handleCredentialsRequest =
              this.handleCredentialsRequest.bind(this)),
            (this.handleLoginSuccessful =
              this.handleLoginSuccessful.bind(this)),
            (this.handleDisconnect = this.handleDisconnect.bind(this)),
            (this.tnMeMetaDesc = this.tnMeMetaDesc.bind(this)),
            (this.tnMeContactUpdate = this.tnMeContactUpdate.bind(this)),
            (this.tnMeSubsUpdated = this.tnMeSubsUpdated.bind(this)),
            (this.resetContactList = this.resetContactList.bind(this)),
            (this.tnData = this.tnData.bind(this)),
            (this.tnInitFind = this.tnInitFind.bind(this)),
            (this.tnFndSubsUpdated = this.tnFndSubsUpdated.bind(this)),
            (this.handleSearchContacts = this.handleSearchContacts.bind(this)),
            (this.handleTopicSelected = this.handleTopicSelected.bind(this)),
            (this.handleHideMessagesView =
              this.handleHideMessagesView.bind(this)),
            (this.handleSendMessage = this.handleSendMessage.bind(this)),
            (this.handleNewChatInvitation =
              this.handleNewChatInvitation.bind(this)),
            (this.handleNewAccount = this.handleNewAccount.bind(this)),
            (this.handleNewAccountRequest =
              this.handleNewAccountRequest.bind(this)),
            (this.handleUpdateAccountRequest =
              this.handleUpdateAccountRequest.bind(this)),
            (this.handleUpdateAccountTagsRequest =
              this.handleUpdateAccountTagsRequest.bind(this)),
            (this.handleToggleIncognitoMode =
              this.handleToggleIncognitoMode.bind(this)),
            (this.handleSettings = this.handleSettings.bind(this)),
            (this.handleGlobalSettings = this.handleGlobalSettings.bind(this)),
            (this.handleShowArchive = this.handleShowArchive.bind(this)),
            (this.handleShowBlocked = this.handleShowBlocked.bind(this)),
            (this.handleToggleMessageSounds =
              this.handleToggleMessageSounds.bind(this)),
            (this.handleCredAdd = this.handleCredAdd.bind(this)),
            (this.handleCredDelete = this.handleCredDelete.bind(this)),
            (this.handleCredConfirm = this.handleCredConfirm.bind(this)),
            (this.initFCMessaging = this.initFCMessaging.bind(this)),
            (this.togglePushToken = this.togglePushToken.bind(this)),
            (this.requestPushToken = this.requestPushToken.bind(this)),
            (this.handlePushMessage = this.handlePushMessage.bind(this)),
            (this.handleSidepanelCancel =
              this.handleSidepanelCancel.bind(this)),
            (this.handleStartTopicRequest =
              this.handleStartTopicRequest.bind(this)),
            (this.handleNewTopicCreated =
              this.handleNewTopicCreated.bind(this)),
            (this.handleTopicUpdateRequest =
              this.handleTopicUpdateRequest.bind(this)),
            (this.handleChangePermissions =
              this.handleChangePermissions.bind(this)),
            (this.handleTagsUpdated = this.handleTagsUpdated.bind(this)),
            (this.handleLogout = this.handleLogout.bind(this)),
            (this.handleDeleteAccount = this.handleDeleteAccount.bind(this)),
            (this.handleDeleteTopicRequest =
              this.handleDeleteTopicRequest.bind(this)),
            (this.handleDeleteMessagesRequest =
              this.handleDeleteMessagesRequest.bind(this)),
            (this.handleLeaveUnsubRequest =
              this.handleLeaveUnsubRequest.bind(this)),
            (this.handleBlockTopicRequest =
              this.handleBlockTopicRequest.bind(this)),
            (this.handleReportTopic = this.handleReportTopic.bind(this)),
            (this.handleShowContextMenu =
              this.handleShowContextMenu.bind(this)),
            (this.defaultTopicContextMenu =
              this.defaultTopicContextMenu.bind(this)),
            (this.handleHideContextMenu =
              this.handleHideContextMenu.bind(this)),
            (this.handleShowAlert = this.handleShowAlert.bind(this)),
            (this.handleShowInfoView = this.handleShowInfoView.bind(this)),
            (this.handleHideInfoView = this.handleHideInfoView.bind(this)),
            (this.handleMemberUpdateRequest =
              this.handleMemberUpdateRequest.bind(this)),
            (this.handleValidateCredentialsRequest =
              this.handleValidateCredentialsRequest.bind(this)),
            (this.handlePasswordResetRequest =
              this.handlePasswordResetRequest.bind(this)),
            (this.handleResetPassword = this.handleResetPassword.bind(this)),
            (this.handleContextMenuAction =
              this.handleContextMenuAction.bind(this));
        }
        getBlankState() {
          const e = Ye.getObject("settings") || {},
            t = !!Ye.getObject("keep-logged-in");
          return {
            connected: !1,
            ready: !1,
            autoLogin: !1,
            transport: e.transport || null,
            serverAddress: e.serverAddress || yt(),
            serverVersion: "no connection",
            messageSounds: !e.messageSoundsOff,
            incognitoMode: !1,
            desktopAlerts: t && e.desktopAlerts,
            desktopAlertsEnabled:
              (St() ||
                ("object" == typeof window.location &&
                  "localhost" == window.location.hostname)) &&
              void 0 !== c &&
              "undefined" != typeof navigator &&
              "undefined" != typeof FIREBASE_INIT,
            firebaseToken: t ? Ye.getObject("firebase-token") : null,
            applicationVisible: !document.hidden,
            errorText: "",
            errorLevel: null,
            errorAction: void 0,
            errorActionText: null,
            sidePanelSelected: "login",
            sidePanelTitle: null,
            sidePanelAvatar: null,
            loadSpinnerVisible: !1,
            login: "",
            password: "",
            persist: t,
            myUserId: null,
            liveConnection: navigator.onLine,
            topicSelected: "",
            topicSelectedOnline: !1,
            topicSelectedAcs: null,
            newTopicParams: null,
            loginDisabled: !1,
            displayMobile: window.innerWidth <= 640,
            showInfoPanel: !1,
            mobilePanel: "sidepanel",
            contextMenuVisible: !1,
            contextMenuBounds: null,
            contextMenuClickAt: null,
            contextMenuParams: null,
            contextMenuItems: [],
            alertVisible: !1,
            alertParams: {},
            chatList: [],
            searchResults: [],
            searchableContacts: [],
            credMethod: void 0,
            credCode: void 0,
            requestedTopic: void 0,
          };
        }
        componentDidMount() {
          if (
            (window.addEventListener("resize", this.handleResize),
            window.addEventListener("online", (e) => {
              this.handleOnline(!0);
            }),
            window.addEventListener("offline", (e) => {
              this.handleOnline(!1);
            }),
            window.addEventListener("hashchange", this.handleHashRoute),
            "function" == typeof BroadcastChannel)
          ) {
            new BroadcastChannel("tinode-sw").addEventListener(
              "message",
              this.handlePushMessage
            );
          } else
            console.warn(
              "Your browser does not support BroadcastChannel. Some features will not be available"
            );
          document.addEventListener(
            "visibilitychange",
            this.handleVisibilityEvent
          ),
            this.setState({
              viewportWidth: document.documentElement.clientWidth,
              viewportHeight: document.documentElement.clientHeight,
            }),
            new Promise((e, t) => {
              (this.tinode = Tt.tnSetup(
                this.state.serverAddress,
                this.state.transport,
                this.props.intl.locale,
                this.state.persist,
                e
              )),
                (this.tinode.onConnect = this.handleConnected),
                (this.tinode.onDisconnect = this.handleDisconnect),
                (this.tinode.onAutoreconnectIteration =
                  this.handleAutoreconnectIteration);
            }).then(() => {
              this.state.desktopAlertsEnabled &&
                this.initFCMessaging()
                  .then(() => {
                    this.state.desktopAlerts &&
                      (this.state.firebaseToken
                        ? this.tinode.setDeviceToken(this.state.firebaseToken)
                        : this.togglePushToken(!0));
                  })
                  .catch(() => {});
              const e = Le.parseUrlHash(window.location.hash);
              this.resetContactList();
              const t = this.state.persist
                ? Ye.getObject("auth-token")
                : void 0;
              t &&
                (this.setState({ autoLogin: !0 }),
                this.tinode.setAuthToken(t),
                this.tinode.connect().catch((e) => {
                  this.handleError(e.message, "err");
                })),
                this.setState({ requestedTopic: e.path[1] }),
                Le.navigateTo(""),
                (this.readTimer = null),
                (this.readTimerCallback = null),
                this.handleHashRoute();
            });
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.handleResize),
            window.removeEventListener("hashchange", this.handleHashRoute),
            document.removeEventListener(
              "visibilitychange",
              this.handleVisibilityEvent
            );
        }
        static tnSetup(e, t, s, a, n) {
          const i = new (h())(
            {
              appName: u,
              host: e,
              apiKey: "AQEAAAABAAD_rAp4DJh05a1HAwFT3A6K",
              transport: t,
              secure: St(),
              persist: a,
            },
            n
          );
          return i.setHumanLanguage(s), i.enableLogging(true, !0), i;
        }
        handlePushMessage(e) {
          "msg" == e.what &&
            h().isChannelTopicName(e.topic) &&
            this.tinode.oobNotification(e.topic, e.seq, "fake-uid");
        }
        initFCMessaging() {
          const { formatMessage: e, locale: t } = this.props.intl,
            s = (t, s) => {
              console.error(t, s),
                this.handleError(e(kt.push_init_failed), "err"),
                this.setState({ desktopAlertsEnabled: !1 });
            };
          try {
            return (
              (this.fbPush = c.initializeApp(FIREBASE_INIT, u).messaging()),
              this.fbPush.usePublicVapidKey(FIREBASE_INIT.messagingVapidKey),
              navigator.serviceWorker
                .register("/service-worker.js")
                .then(
                  (e) => (
                    this.checkForAppUpdate(e),
                    this.fbPush.useServiceWorker(e),
                    e.active.postMessage(
                      JSON.stringify({ locale: t, version: m })
                    ),
                    this.fbPush.onTokenRefresh(() => {
                      this.requestPushToken();
                    }),
                    this.fbPush.onMessage((e) => {
                      this.handlePushMessage(e.data);
                    }),
                    e
                  )
                )
                .catch(
                  (e) => (
                    s("Failed to register service worker:", e),
                    Promise.reject(e)
                  )
                )
            );
          } catch (e) {
            return (
              s("Failed to initialize push notifications", e), Promise.reject(e)
            );
          }
        }
        handleResize() {
          const e = document.documentElement.clientWidth <= 640;
          this.setState({
            viewportWidth: document.documentElement.clientWidth,
            viewportHeight: document.documentElement.clientHeight,
          }),
            this.state.displayMobile != e &&
              this.setState({ displayMobile: e });
        }
        checkForAppUpdate(e) {
          e.onupdatefound = () => {
            const t = e.installing;
            t.onstatechange = () => {
              if (
                "installed" == t.state &&
                navigator.serviceWorker.controller
              ) {
                const e = n().createElement(
                  n().Fragment,
                  null,
                  n().createElement(l.FormattedMessage, {
                    id: "update_available",
                    defaultMessage: [{ type: 0, value: "Update available." }],
                  }),
                  " ",
                  n().createElement(
                    "a",
                    { href: "" },
                    n().createElement(l.FormattedMessage, {
                      id: "reload_update",
                      defaultMessage: [{ type: 0, value: "Reload" }],
                    })
                  ),
                  "."
                );
                this.handleError(e, "info");
              }
            };
          };
        }
        handleHashRoute() {
          const e = Le.parseUrlHash(window.location.hash);
          if (e.path && e.path.length > 0) {
            [
              "register",
              "settings",
              "edit",
              "notif",
              "security",
              "support",
              "general",
              "cred",
              "reset",
              "newtpk",
              "archive",
              "blocked",
              "contacts",
              "",
            ].includes(e.path[0])
              ? this.setState({ sidePanelSelected: e.path[0] })
              : console.warn("Unknown sidepanel view", e.path[0]);
            let t = e.path[1] || null;
            if (t != this.state.topicSelected) {
              h().topicType(t) || (t = null);
              const e = { topicSelected: t },
                s = this.tinode.getTopicAccessMode(t);
              s && (e.topicSelectedAcs = s), this.setState(e);
            }
          } else this.setState({ sidePanelSelected: "", topicSelected: null });
          e.params.method && this.setState({ credMethod: e.params.method }),
            e.params.code && this.setState({ credCode: e.params.code }),
            this.setState({
              showInfoPanel: e.params.info,
              newTopicTabSelected: e.params.tab,
            });
        }
        handleOnline(e) {
          e
            ? (this.handleError(),
              clearInterval(this.reconnectCountdown),
              this.tinode.reconnect())
            : this.handleError(
                this.props.intl.formatMessage(kt.no_connection),
                "warn"
              ),
            this.setState({ liveConnection: e });
        }
        handleVisibilityEvent() {
          this.setState({ applicationVisible: !document.hidden });
        }
        handleError(e, t, s, a) {
          this.setState({
            errorText: e,
            errorLevel: t,
            errorAction: s,
            errorActionText: a,
          });
        }
        handleLoginRequest(e, t, s, a) {
          this.setState({
            loginDisabled: !0,
            login: e,
            password: t,
            token: s,
            id_device: a,
            loadSpinnerVisible: !0,
            autoLogin: !0,
          }),
            this.handleError("", null),
            this.tinode.isConnected()
              ? this.doLogin(e, t, s, a, {
                  meth: this.state.credMethod,
                  resp: this.state.credCode,
                })
              : this.tinode.connect().catch((e) => {
                  this.setState({
                    loginDisabled: !1,
                    autoLogin: !1,
                    loadSpinnerVisible: !1,
                  }),
                    this.handleError(e.message, "err");
                });
        }
        handlePersistenceChange(e) {
          e
            ? this.tinode.initStorage().then(() => {
                Ye.setObject("keep-logged-in", !0),
                  this.setState({ persist: !0 });
              })
            : this.tinode.clearStorage().then(() => {
                Ye.setObject("keep-logged-in", !1),
                  this.setState({ persist: !1 });
              });
        }
        handleConnected() {
          clearInterval(this.reconnectCountdown), this.handleError();
          const e = this.tinode.getServerInfo();
          this.setState({
            serverVersion: e.ver + " " + (e.build ? e.build : "none"),
          }),
            this.state.autoLogin &&
              this.doLogin(
                this.state.login,
                this.state.password,
                this.state.token,
                this.state.id_device,
                { meth: this.state.credMethod, resp: this.state.credCode }
              );
        }
        handleAutoreconnectIteration(e, t) {
          if ((clearInterval(this.reconnectCountdown), e < 0))
            return void this.handleError();
          if (t)
            return void t
              .then(() => {
                this.handleError();
              })
              .catch((e) => {
                this.handleError(e.message, "err");
              });
          const { formatMessage: s } = this.props.intl;
          let a = e / 1e3;
          (a |= a),
            (this.reconnectCountdown = setInterval(() => {
              const e =
                a > 99
                  ? (function (e) {
                      let t = e % 60;
                      return (
                        (t = t < 10 ? `0${t}` : t), `${Math.floor(e / 60)}:${t}`
                      );
                    })(a)
                  : a;
              this.handleError(
                s(kt.reconnect_countdown, { seconds: e }),
                "warn",
                () => {
                  clearInterval(this.reconnectCountdown),
                    this.tinode.reconnect();
                },
                s(kt.reconnect_now)
              ),
                (a -= 1);
            }, 1e3));
        }
        handleDisconnect(e) {
          this.setState({
            connected: !1,
            ready: !1,
            topicSelectedOnline: !1,
            errorText: e && e.message ? e.message : "Disconnected",
            errorLevel: e && e.message ? "err" : "warn",
            loginDisabled: !1,
            contextMenuVisible: !1,
            serverVersion: "no connection",
          });
        }
        doLogin(e, t, s, a, n) {
          if (this.tinode.isAuthenticated()) return void Le.navigateTo("");
          n = h().credential(n);
          let i = null;
          const o = this.tinode.getAuthToken();
          e && t
            ? (this.setState({ password: null }),
              (i = this.tinode.loginBasic(e, t, n)),
              localStorage.setItem("access_token", s),
              localStorage.setItem("id_device", a))
            : o &&
              ((i = this.tinode.loginToken(o.token, n)),
              localStorage.setItem("access_token", s),
              localStorage.setItem("id_device", a)),
            i
              ? i
                  .then((e) => {
                    e.code >= 300 && "validate credentials" === e.text
                      ? (this.setState({ loadSpinnerVisible: !1 }),
                        n &&
                          this.handleError(
                            this.props.intl.formatMessage(
                              kt.code_doesnot_match
                            ),
                            "warn"
                          ),
                        this.handleCredentialsRequest(e.params))
                      : this.handleLoginSuccessful();
                  })
                  .catch((e) => {
                    this.setState({
                      loginDisabled: !1,
                      credMethod: void 0,
                      credCode: void 0,
                      loadSpinnerVisible: !1,
                      autoLogin: !1,
                    }),
                      this.handleError(e.message, "err"),
                      localStorage.removeItem("auth-token"),
                      Le.navigateTo(""),
                      localStorage.setItem("access_token", null),
                      localStorage.setItem("id_device", null);
                  })
              : (Le.navigateTo(""), this.setState({ loginDisabled: !1 }));
        }
        handleCredentialsRequest(e) {
          const t = Le.parseUrlHash(window.location.hash);
          (t.path[0] = "cred"),
            (t.params.method = e.cred[0]),
            Le.navigateTo(Le.composeUrlHash(t.path, t.params));
        }
        handleLoginSuccessful() {
          this.handleError(),
            Ye.getObject("keep-logged-in") &&
              Ye.setObject("auth-token", this.tinode.getAuthToken());
          const e = this.state.requestedTopic,
            t = this.tinode.getMeTopic();
          (t.onMetaDesc = this.tnMeMetaDesc),
            (t.onContactUpdate = this.tnMeContactUpdate),
            (t.onSubsUpdated = this.tnMeSubsUpdated),
            this.setState({
              connected: !0,
              credMethod: void 0,
              credCode: void 0,
              myUserId: this.tinode.getCurrentUserID(),
              autoLogin: !0,
              requestedTopic: void 0,
            }),
            t
              .subscribe(
                t
                  .startMetaQuery()
                  .withLaterSub()
                  .withDesc()
                  .withTags()
                  .withCred()
                  .build()
              )
              .catch((e) => {
                this.tinode.disconnect(),
                  localStorage.removeItem("auth-token"),
                  this.handleError(e.message, "err"),
                  Le.navigateTo("");
              })
              .finally(() => {
                this.setState({ loadSpinnerVisible: !1 });
              });
          let s = Le.setUrlSidePanel(window.location.hash, "contacts");
          e && (s = Le.setUrlTopic(s, e)), Le.navigateTo(s);
        }
        tnMeMetaDesc(e) {
          e &&
            (e.public &&
              this.setState({
                sidePanelTitle: e.public.fn,
                sidePanelAvatar: I(e.public.photo),
              }),
            e.acs && this.setState({ incognitoMode: !e.acs.isPresencer() }));
        }
        tnMeContactUpdate(e, t) {
          if ("on" == e || "off" == e)
            this.resetContactList(),
              this.state.topicSelected == t.topic &&
                this.setState({ topicSelectedOnline: "on" == e });
          else if ("read" == e) this.resetContactList();
          else if ("msg" == e) {
            const e = this.tinode.getTopic(t.topic),
              s = e && e.isArchived();
            t.unread > 0 &&
              this.state.messageSounds &&
              !s &&
              (document.hidden || this.state.topicSelected != t.topic) &&
              Mt.play(),
              this.resetContactList();
          } else
            "recv" == e ||
              ("gone" == e || "unsub" == e
                ? (this.state.topicSelected == t.topic &&
                    this.handleTopicSelected(null),
                  this.resetContactList())
                : "acs" == e
                ? this.state.topicSelected == t.topic &&
                  this.setState({ topicSelectedAcs: t.acs })
                : "del" == e ||
                  "upd" == e ||
                  console.info(
                    "Unsupported (yet) presence update:" + e + " in: " + t.topic
                  ));
        }
        tnMeSubsUpdated(e) {
          this.resetContactList();
        }
        static prepareSearchableContacts(e, t) {
          const s = {};
          for (const t of e)
            h().isP2PTopicName(t.topic) &&
              (s[t.topic] = {
                user: t.topic,
                updated: t.updated,
                public: t.public,
                private: t.private,
                acs: t.acs,
              });
          for (const e of t) s[e.user] || (s[e.user] = e);
          return Object.values(s);
        }
        resetContactList() {
          const e = { chatList: [] };
          this.state.ready || (e.ready = !0),
            this.tinode.getMeTopic().contacts((t) => {
              t.topic || t.user || (t.topic = t.name),
                e.chatList.push(t),
                this.state.topicSelected == t.topic &&
                  ((e.topicSelectedOnline = t.online),
                  (e.topicSelectedAcs = t.acs));
            });
          const t = new Date(0);
          e.chatList.sort(
            (e, s) => (e.touched || t).getTime() - (s.touched || t).getTime()
          ),
            (e.searchableContacts = Tt.prepareSearchableContacts(
              e.chatList,
              this.state.searchResults
            )),
            this.setState(e);
        }
        tnData(e) {
          const t = this.tinode.getTopic(e.topic);
          t.msgStatus(e, !0) >= h().MESSAGE_STATUS_SENT &&
            e.from != this.state.myUserId &&
            (clearTimeout(this.receivedTimer),
            (this.receivedTimer = setTimeout(() => {
              (this.receivedTimer = void 0), t.noteRecv(e.seq);
            }, 500)));
        }
        tnInitFind() {
          const e = this.tinode.getFndTopic();
          (e.onSubsUpdated = this.tnFndSubsUpdated),
            e.isSubscribed()
              ? this.tnFndSubsUpdated()
              : e.subscribe(e.startMetaQuery().withSub().build()).catch((e) => {
                  this.handleError(e.message, "err");
                });
        }
        tnFndSubsUpdated() {
          const e = [];
          this.tinode.getFndTopic().contacts((t) => {
            e.push(t);
          }),
            this.setState({
              searchResults: e,
              searchableContacts: Tt.prepareSearchableContacts(
                this.state.chatList,
                e
              ),
            });
        }
        handleSearchContacts(e) {
          const t = this.tinode.getFndTopic();
          t.setMeta({ desc: { public: e } })
            .then((e) => t.getMeta(t.startMetaQuery().withSub().build()))
            .catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleTopicSelected(e) {
          this.state.newTopicParams &&
            this.state.newTopicParams._topicName != e &&
            this.setState({ newTopicParams: null }),
            e
              ? (this.setState({
                  errorText: "",
                  errorLevel: null,
                  mobilePanel: "topic-view",
                  showInfoPanel: !1,
                }),
                this.state.topicSelected != e &&
                  (this.setState({
                    topicSelectedOnline: this.tinode.isTopicOnline(e),
                    topicSelectedAcs: this.tinode.getTopicAccessMode(e),
                  }),
                  Le.navigateTo(Le.setUrlTopic("", e))))
              : (this.setState({
                  errorText: "",
                  errorLevel: null,
                  mobilePanel: "sidepanel",
                  topicSelectedOnline: !1,
                  topicSelectedAcs: null,
                  showInfoPanel: !1,
                }),
                Le.navigateTo(Le.setUrlTopic("", null)));
        }
        handleHideMessagesView() {
          this.setState({ mobilePanel: "sidepanel" }),
            Le.navigateTo(Le.setUrlTopic(window.location.hash, null));
        }
        handleSendMessage(e, t, s) {
          const a = this.tinode.getTopic(this.state.topicSelected);
          ((e = a.createMessage(e, !1))._uploader = s),
            a.isSubscribed() ||
              (t || (t = Promise.resolve()), (t = t.then(() => a.subscribe()))),
            t &&
              (t = t.catch((e) => {
                this.handleError(e.message, "err");
              })),
            a
              .publishDraft(e, t)
              .then((e) => {
                if (a.isArchived()) return a.archive(!1);
              })
              .catch((e) => {
                this.handleError(e.message, "err");
              });
        }
        handleNewChatInvitation(e, t) {
          const s = this.tinode.getTopic(e);
          let a = null;
          switch (t) {
            case "accept":
              const n = s.getAccessMode().getGiven();
              (a = s.setMeta({ sub: { mode: n } })),
                s.isP2PType() &&
                  (a = a.then((t) => {
                    s.setMeta({ sub: { user: e, mode: n } });
                  }));
              break;
            case "delete":
              a = s.delTopic(!0);
              break;
            case "block":
              const i = s.getAccessMode().updateWant("-JP").getWant();
              a = s
                .setMeta({ sub: { mode: i } })
                .then((e) => this.handleTopicSelected(null));
              break;
            default:
              console.warn("Unknown invitation action", '"' + t + '""');
          }
          null != a &&
            a.catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleNewAccount() {
          this.handleError(),
            Le.navigateTo(Le.setUrlSidePanel(window.location.hash, "register"));
        }
        handleNewAccountRequest(e, t, s, a, n) {
          this.handleError(),
            this.tinode
              .connect(this.state.serverAddress)
              .then(() =>
                this.tinode.createAccountBasic(e, t, {
                  public: s,
                  tags: n,
                  cred: h().credential(a),
                })
              )
              .then((e) => {
                e.code >= 300 && "validate credentials" == e.text
                  ? this.handleCredentialsRequest(e.params)
                  : this.handleLoginSuccessful(this);
              })
              .catch((e) => {
                this.handleError(e.message, "err");
              });
        }
        handleUpdateAccountRequest(e, t, s) {
          if ((this.handleError(), t || s)) {
            const e = {};
            t && (e.public = t),
              s && (e.defacs = s),
              this.tinode
                .getMeTopic()
                .setMeta({ desc: e })
                .catch((e) => {
                  this.handleError(e.message, "err");
                });
          }
          e &&
            this.tinode
              .updateAccountBasic(null, this.tinode.getCurrentLogin(), e)
              .catch((e) => {
                this.handleError(e.message, "err");
              });
        }
        handleToggleIncognitoMode(e) {
          const t = this.tinode.getMeTopic(),
            s = t
              .getAccessMode()
              .updateWant(e ? "-P" : "+P")
              .getWant();
          t.setMeta({ sub: { mode: s } }).catch((e) => {
            this.handleError(e.message, "err");
          });
        }
        handleUpdateAccountTagsRequest(e) {
          this.tinode
            .getMeTopic()
            .setMeta({ tags: e })
            .catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleSettings() {
          this.handleError(),
            Le.navigateTo(
              Le.setUrlSidePanel(
                window.location.hash,
                this.state.myUserId ? "edit" : "settings"
              )
            );
        }
        handleGlobalSettings(e) {
          const t = e.serverAddress || this.state.serverAddress,
            s = e.transport || this.state.transport;
          this.tinode &&
            (this.tinode.clearStorage(),
            (this.tinode.onDisconnect = void 0),
            this.tinode.disconnect()),
            (this.tinode = Tt.tnSetup(
              t,
              s,
              this.props.intl.locale,
              Ye.getObject("keep-logged-in")
            )),
            (this.tinode.onConnect = this.handleConnected),
            (this.tinode.onDisconnect = this.handleDisconnect),
            (this.tinode.onAutoreconnectIteration =
              this.handleAutoreconnectIteration),
            this.setState({ serverAddress: t, transport: s }),
            Ye.setObject("settings", { serverAddress: t, transport: s }),
            Le.navigateTo(Le.setUrlSidePanel(window.location.hash, ""));
        }
        handleShowArchive() {
          Le.navigateTo(
            Le.setUrlSidePanel(
              window.location.hash,
              this.state.myUserId ? "archive" : ""
            )
          );
        }
        handleShowBlocked() {
          Le.navigateTo(
            Le.setUrlSidePanel(
              window.location.hash,
              this.state.myUserId ? "blocked" : ""
            )
          );
        }
        togglePushToken(e) {
          if (e)
            if (this.state.firebaseToken)
              this.setState({ desktopAlerts: !0 }),
                Ye.getObject("keep-logged-in") &&
                  Ye.updateObject("settings", { desktopAlerts: !0 });
            else {
              (this.fbPush ? Promise.resolve() : this.initFCMessaging())
                .then(() => this.fbPush.requestPermission())
                .then(() => {
                  this.requestPushToken();
                })
                .catch((e) => {
                  console.warn("Failed to get notification permission.", e),
                    this.handleError(e.message, "err"),
                    this.setState({ desktopAlerts: !1, firebaseToken: null }),
                    Ye.updateObject("settings", { desktopAlerts: !1 });
                });
            }
          else
            this.state.firebaseToken && this.fbPush
              ? this.fbPush
                  .deleteToken(this.state.firebaseToken)
                  .catch((e) => {
                    console.warn("Unable to delete token.", e);
                  })
                  .finally(() => {
                    Ye.updateObject("settings", { desktopAlerts: !1 }),
                      localStorage.removeItem("firebase-token"),
                      this.setState({ desktopAlerts: !1, firebaseToken: null }),
                      this.tinode.setDeviceToken(null);
                  })
              : (this.setState({ desktopAlerts: !1, firebaseToken: null }),
                Ye.updateObject("settings", { desktopAlerts: !1 }));
        }
        requestPushToken() {
          this.fbPush
            .getToken()
            .then((e) => {
              const t = Ye.getObject("keep-logged-in");
              e != this.state.firebaseToken &&
                (this.tinode.setDeviceToken(e),
                t && Ye.setObject("firebase-token", e)),
                this.setState({ firebaseToken: e, desktopAlerts: !0 }),
                t && Ye.updateObject("settings", { desktopAlerts: !0 });
            })
            .catch((e) => {
              this.handleError(e.message, "err"),
                console.warn("Failed to retrieve firebase token", e);
            });
        }
        handleToggleMessageSounds(e) {
          this.setState({ messageSounds: e }),
            Ye.updateObject("settings", { messageSoundsOff: !e });
        }
        handleCredAdd(e, t) {
          this.tinode
            .getMeTopic()
            .setMeta({ cred: { meth: e, val: t } })
            .catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleCredDelete(e, t) {
          this.tinode
            .getMeTopic()
            .delCredential(e, t)
            .catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleCredConfirm(e, t) {
          this.handleCredentialsRequest({ cred: [e] });
        }
        handleSidepanelCancel() {
          const e = Le.parseUrlHash(window.location.hash);
          let t = "";
          ["security", "support", "general", "notif"].includes(e.path[0])
            ? (t = "edit")
            : "blocked" == e.path[0]
            ? (t = "security")
            : this.state.myUserId && (t = "contacts"),
            (e.path[0] = t),
            e.params &&
              (delete e.params.code,
              delete e.params.method,
              delete e.params.tab),
            Le.navigateTo(Le.composeUrlHash(e.path, e.params)),
            this.setState({ errorText: "", errorLevel: null });
        }
        basicNavigator(e) {
          Le.navigateTo(Le.setUrlSidePanel(window.location.hash, e));
        }
        handleStartTopicRequest(e, t, s, a, n) {
          if (e && this.tinode.isTopicCached(e))
            return void this.handleTopicSelected(e);
          const i = {};
          h().isP2PTopicName(e)
            ? ((i.sub = { mode: v }), (i.desc = { defacs: { auth: v } }))
            : ((e = e || this.tinode.newGroupTopicName(n)),
              (i.desc = { public: t, private: { comment: s } }),
              (i.tags = a)),
            (i._topicName = e),
            this.setState({ newTopicParams: i }, () => {
              this.handleTopicSelected(e);
            });
        }
        handleNewTopicCreated(e, t) {
          this.state.topicSelected == e &&
            e != t &&
            this.setState({ topicSelected: t }, () => {
              Le.navigateTo(Le.setUrlTopic("", t));
            });
        }
        handleTopicUpdateRequest(e, t, s, a) {
          const n = this.tinode.getTopic(e);
          if (n) {
            const e = {};
            t && (e.public = t),
              s &&
                (e.private =
                  s === h().DEL_CHAR ? h().DEL_CHAR : { comment: s }),
              a && (e.defacs = a),
              n.setMeta({ desc: e }).catch((e) => {
                this.handleError(e.message, "err");
              });
          }
        }
        handleChangePermissions(e, t, s) {
          const a = this.tinode.getTopic(e);
          if (a) {
            const e = a.getAccessMode();
            s
              ? (e.updateGiven(t), (t = e.getGiven()))
              : (e.updateWant(t), (t = e.getWant())),
              a.setMeta({ sub: { user: s, mode: t } }).catch((e) => {
                this.handleError(e.message, "err");
              });
          }
        }
        handleTagsUpdated(e, t) {
          const s = this.tinode.getTopic(e);
          s &&
            s.setMeta({ tags: t }).catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleLogout() {
          j(0),
            localStorage.removeItem("auth-token"),
            localStorage.removeItem("firebase-token"),
            localStorage.removeItem("settings"),
            this.state.firebaseToken &&
              this.fbPush.deleteToken(this.state.firebaseToken),
            clearInterval(this.reconnectCountdown),
            this.tinode &&
              (this.tinode.clearStorage(),
              (this.tinode.onDisconnect = void 0),
              this.tinode.disconnect()),
            this.setState(this.getBlankState()),
            (this.tinode = Tt.tnSetup(
              this.state.serverAddress,
              this.state.transport,
              this.props.intl.locale,
              Ye.getObject("keep-logged-in")
            )),
            (this.tinode.onConnect = this.handleConnected),
            (this.tinode.onDisconnect = this.handleDisconnect),
            (this.tinode.onAutoreconnectIteration =
              this.handleAutoreconnectIteration),
            Le.navigateTo("");
        }
        handleDeleteAccount() {
          this.tinode.delCurrentUser(!0).then((e) => {
            this.handleLogout();
          });
        }
        handleDeleteTopicRequest(e) {
          const t = this.tinode.getTopic(e);
          t &&
            t
              .delTopic(!0)
              .then((e) => {
                Le.navigateTo(Le.setUrlTopic(window.location.hash, ""));
              })
              .catch((e) => {
                this.handleError(e.message, "err");
              });
        }
        handleDeleteMessagesRequest(e) {
          const t = this.tinode.getTopic(e);
          t &&
            t.delMessagesAll(!0).catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleLeaveUnsubRequest(e) {
          const t = this.tinode.getTopic(e);
          t &&
            t
              .leave(!0)
              .then((e) => {
                Le.navigateTo(Le.setUrlTopic(window.location.hash, ""));
              })
              .catch((e) => {
                this.handleError(e.message, "err");
              });
        }
        handleBlockTopicRequest(e) {
          const t = this.tinode.getTopic(e);
          t &&
            t
              .updateMode(null, "-JP")
              .then((e) => {
                Le.navigateTo(Le.setUrlTopic(window.location.hash, ""));
              })
              .catch((e) => {
                this.handleError(e.message, "err");
              });
        }
        handleReportTopic(e) {
          const t = this.tinode.getTopic(e);
          t &&
            (this.tinode.publish(
              h().TOPIC_SYS,
              h().Drafty.attachJSON(null, { action: "report", target: e })
            ),
            t
              .updateMode(null, "-JP")
              .then((e) => {
                Le.navigateTo(Le.setUrlTopic(window.location.hash, ""));
              })
              .catch((e) => {
                this.handleError(e.message, "err");
              }));
        }
        handleShowContextMenu(e, t) {
          this.setState({
            contextMenuVisible: !0,
            contextMenuClickAt: { x: e.x, y: e.y },
            contextMenuParams: e,
            contextMenuItems: t || this.defaultTopicContextMenu(e.topicName),
            contextMenuBounds: o().findDOMNode(this).getBoundingClientRect(),
          });
        }
        defaultTopicContextMenu(e) {
          const t = this.tinode.getTopic(e);
          let s = !1,
            a = !1,
            n = !1,
            i = !1,
            o = !1,
            l = !1;
          if (t) {
            (i = t.isSubscribed()), (l = t.isArchived());
            const e = t.getAccessMode();
            e &&
              ((s = e.isMuted()),
              (a = !e.isJoiner()),
              (n = !e.isJoiner("want")),
              (o = e.isDeleter()));
          }
          return [
            i
              ? {
                  title: this.props.intl.formatMessage(kt.menu_item_info),
                  handler: this.handleShowInfoView,
                }
              : null,
            i ? "messages_clear" : null,
            i && o ? "messages_clear_hard" : null,
            s ? (a ? null : "topic_unmute") : "topic_mute",
            n ? "topic_unblock" : "topic_block",
            l ? "topic_restore" : "topic_archive",
            "topic_delete",
          ];
        }
        handleHideContextMenu() {
          this.setState({
            contextMenuVisible: !1,
            contextMenuClickAt: null,
            contextMenuParams: null,
            contextMenuBounds: null,
          });
        }
        handleContextMenuAction(e, t, s) {
          "topic_archive" == e &&
            t &&
            s.topicName &&
            s.topicName == this.state.topicSelected &&
            t.then(() => {
              this.handleTopicSelected(null);
            });
        }
        handleShowAlert(e, t, s, a, n, i) {
          this.setState({
            alertVisible: !0,
            alertParams: {
              title: e,
              content: t,
              onConfirm: s,
              confirm: a,
              onReject: n,
              reject: i,
            },
          });
        }
        handleShowInfoView() {
          Le.navigateTo(Le.addUrlParam(window.location.hash, "info", !0)),
            this.setState({ showInfoPanel: !0 });
        }
        handleHideInfoView() {
          Le.navigateTo(Le.removeUrlParam(window.location.hash, "info")),
            this.setState({ showInfoPanel: !1 });
        }
        handleMemberUpdateRequest(e, t, s) {
          if (!e) return;
          const a = this.tinode.getTopic(e);
          a &&
            (t &&
              t.length > 0 &&
              t.map((e) => {
                a.invite(e, null).catch((e) => {
                  this.handleError(e.message, "err");
                });
              }),
            s &&
              s.length > 0 &&
              s.map((e) => {
                a.delSubscription(e).catch((e) => {
                  this.handleError(e.message, "err");
                });
              }));
        }
        handleValidateCredentialsRequest(e, t) {
          if (this.tinode.isAuthenticated()) {
            this.tinode
              .getMeTopic()
              .setMeta({ cred: { meth: e, resp: t } })
              .then(() => {
                Le.navigateTo("");
              })
              .catch((e) => {
                this.handleError(e.message, "err");
              });
          } else
            this.setState({ credMethod: e, credCode: t }),
              this.doLogin(null, null, null, null, { meth: e, resp: t });
        }
        handlePasswordResetRequest(e, t) {
          return this.tinode
            .connect()
            .then(() => this.tinode.requestResetAuthSecret("basic", e, t))
            .catch((e) => {
              this.handleError(e.message, "err");
            });
        }
        handleResetPassword(e, t, s) {
          (s = (function (e) {
            if (e) {
              e = e.replace(/-/g, "+").replace(/_/g, "/");
              try {
                e = btoa(atob(e));
              } catch (t) {
                console.log("Failed to base64 re-encode string.", t),
                  (e = null);
              }
            }
            return e;
          })(s))
            ? this.tinode
                .connect()
                .then(() =>
                  this.tinode.updateAccountBasic(null, null, t, { token: s })
                )
                .catch((e) => {
                  this.handleError(e.message, "err");
                })
            : this.handleError(
                this.props.intl.formatMessage(kt.invalid_security_token),
                "err"
              );
        }
        render() {
          return n().createElement(
            "div",
            { id: "app-container" },
            this.state.contextMenuVisible
              ? n().createElement(T, {
                  tinode: this.tinode,
                  bounds: this.state.contextMenuBounds,
                  clickAt: this.state.contextMenuClickAt,
                  params: this.state.contextMenuParams,
                  items: this.state.contextMenuItems,
                  hide: this.handleHideContextMenu,
                  onShowAlert: this.handleShowAlert,
                  onAction: this.handleContextMenuAction,
                  onTopicRemoved: (e) => {
                    e == this.state.topicSelected &&
                      this.handleTopicSelected(null);
                  },
                  onError: this.handleError,
                })
              : null,
            n().createElement(p, {
              visible: this.state.alertVisible,
              title: this.state.alertParams.title,
              content: this.state.alertParams.content,
              onReject: this.state.alertParams.onReject
                ? () => {
                    this.setState({ alertVisible: !1 });
                  }
                : null,
              reject: this.state.alertParams.reject,
              onConfirm: () => {
                this.setState({ alertVisible: !1 }),
                  this.state.alertParams.onConfirm();
              },
              confirm: this.state.alertParams.confirm,
            }),
            n().createElement(Ct, {
              tinode: this.tinode,
              connected: this.state.connected,
              displayMobile: this.state.displayMobile,
              hideSelf:
                this.state.displayMobile &&
                "sidepanel" !== this.state.mobilePanel,
              state: this.state.sidePanelSelected,
              title: this.state.sidePanelTitle,
              avatar: this.state.sidePanelAvatar,
              login: this.state.login,
              persist: this.state.persist,
              myUserId: this.state.myUserId,
              loginDisabled: this.state.loginDisabled,
              loadSpinnerVisible: this.state.loadSpinnerVisible,
              errorText: this.state.errorText,
              errorLevel: this.state.errorLevel,
              errorAction: this.state.errorAction,
              errorActionText: this.state.errorActionText,
              topicSelected: this.state.topicSelected,
              chatList: this.state.chatList,
              credMethod: this.state.credMethod,
              credCode: this.state.credCode,
              transport: this.state.transport,
              messageSounds: this.state.messageSounds,
              desktopAlerts: this.state.desktopAlerts,
              desktopAlertsEnabled: this.state.desktopAlertsEnabled,
              incognitoMode: this.state.incognitoMode,
              serverAddress: this.state.serverAddress,
              serverVersion: this.state.serverVersion,
              onGlobalSettings: this.handleGlobalSettings,
              onSignUp: this.handleNewAccount,
              onSettings: this.handleSettings,
              onBasicNavigate: this.basicNavigator,
              onLoginRequest: this.handleLoginRequest,
              onPersistenceChange: this.handlePersistenceChange,
              onCreateAccount: this.handleNewAccountRequest,
              onUpdateAccount: this.handleUpdateAccountRequest,
              onUpdateAccountTags: this.handleUpdateAccountTagsRequest,
              onTogglePushNotifications: this.togglePushToken,
              onToggleMessageSounds: this.handleToggleMessageSounds,
              onToggleIncognitoMode: this.handleToggleIncognitoMode,
              onCredAdd: this.handleCredAdd,
              onCredDelete: this.handleCredDelete,
              onCredConfirm: this.handleCredConfirm,
              onTopicSelected: this.handleTopicSelected,
              onCreateTopic: this.handleStartTopicRequest,
              onLogout: this.handleLogout,
              onDeleteAccount: this.handleDeleteAccount,
              onShowAlert: this.handleShowAlert,
              onCancel: this.handleSidepanelCancel,
              onError: this.handleError,
              onValidateCredentials: this.handleValidateCredentialsRequest,
              onPasswordResetRequest: this.handlePasswordResetRequest,
              onResetPassword: this.handleResetPassword,
              onShowArchive: this.handleShowArchive,
              onShowBlocked: this.handleShowBlocked,
              onInitFind: this.tnInitFind,
              searchResults: this.state.searchResults,
              onSearchContacts: this.handleSearchContacts,
              showContextMenu: this.handleShowContextMenu,
            }),
            n().createElement(He, {
              tinode: this.tinode,
              connected: this.state.connected,
              ready: this.state.ready,
              online: this.state.topicSelectedOnline,
              acs: this.state.topicSelectedAcs,
              displayMobile: this.state.displayMobile,
              viewportWidth: this.state.viewportWidth,
              viewportHeight: this.state.viewportHeight,
              hideSelf:
                this.state.displayMobile &&
                ("topic-view" !== this.state.mobilePanel ||
                  this.state.showInfoPanel),
              topic: this.state.topicSelected,
              myUserId: this.state.myUserId,
              serverVersion: this.state.serverVersion,
              serverAddress: this.state.serverAddress,
              applicationVisible: this.state.applicationVisible,
              errorText: this.state.errorText,
              errorLevel: this.state.errorLevel,
              errorAction: this.state.errorAction,
              errorActionText: this.state.errorActionText,
              newTopicParams: this.state.newTopicParams,
              onHideMessagesView: this.handleHideMessagesView,
              onData: this.tnData,
              onError: this.handleError,
              onNewTopicCreated: this.handleNewTopicCreated,
              showContextMenu: this.handleShowContextMenu,
              onChangePermissions: this.handleChangePermissions,
              onNewChat: this.handleNewChatInvitation,
              sendMessage: this.handleSendMessage,
            }),
            this.state.showInfoPanel
              ? n().createElement(Ce, {
                  tinode: this.tinode,
                  connected: this.state.connected,
                  displayMobile: this.state.displayMobile,
                  topic: this.state.topicSelected,
                  searchableContacts: this.state.searchableContacts,
                  myUserId: this.state.myUserId,
                  errorText: this.state.errorText,
                  errorLevel: this.state.errorLevel,
                  errorAction: this.state.errorAction,
                  errorActionText: this.state.errorActionText,
                  onTopicDescUpdate: this.handleTopicUpdateRequest,
                  onCancel: this.handleHideInfoView,
                  onShowAlert: this.handleShowAlert,
                  onChangePermissions: this.handleChangePermissions,
                  onMemberUpdateRequest: this.handleMemberUpdateRequest,
                  onDeleteTopic: this.handleDeleteTopicRequest,
                  onDeleteMessages: this.handleDeleteMessagesRequest,
                  onLeaveTopic: this.handleLeaveUnsubRequest,
                  onBlockTopic: this.handleBlockTopicRequest,
                  onReportTopic: this.handleReportTopic,
                  onAddMember: this.handleManageGroupMembers,
                  onTopicTagsUpdate: this.handleTagsUpdated,
                  onInitFind: this.tnInitFind,
                  onError: this.handleError,
                  showContextMenu: this.handleShowContextMenu,
                })
              : null
          );
        }
      }
      const Nt = (0, l.injectIntl)(Tt),
        { params: At } = Le.parseUrlHash(window.location.hash),
        Pt =
          (At && At.hl) ||
          (navigator.languages && navigator.languages[0]) ||
          navigator.language ||
          navigator.userLanguage ||
          "en",
        Dt = Pt.toLowerCase().split(/[-_]/)[0],
        Ft = r[Pt] || r[Dt] || r.en;
      o().render(
        n().createElement(
          n().StrictMode,
          null,
          n().createElement(
            l.IntlProvider,
            { locale: Pt, messages: Ft, textComponent: n().Fragment },
            n().createElement(Nt, null)
          )
        ),
        document.getElementById("mountPoint")
      );
    },
    t = {
      n: (e) => {
        var s = e && e.__esModule ? () => e.default : () => e;
        return t.d(s, { a: s }), s;
      },
      d: (e, s) => {
        for (var a in s)
          t.o(s, a) &&
            !t.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: s[a] });
      },
      o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    };
  e(0, {}, t);
})();
//# sourceMappingURL=index.prod.js.map
