/* automatically built from ReflectionProperty.php*/
PHP.VM.Class.Predefined.ReflectionProperty = function( ENV, $$ ) {
ENV.$Class.New( "ReflectionProperty", 0, {}, function( M, $ ){
 M.Constant("IS_STATIC", $$(1))
.Constant("IS_PUBLIC", $$(256))
.Constant("IS_PROTECTED", $$(512))
.Constant("IS_PRIVATE", $$(1024))
.Variable( "name", 1 )
.Variable( "class", 1 )
.Method( "__construct", 1, [{"name":"class"},{"name":"name","d":"$$(null)"}], function( $, ctx ) {
if ( ((ENV.class_exists($("class"))).$Not()).$Bool.$) {
throw $$(new (ENV.$Class.Get("ReflectionException"))( this, $$("Class ").$Concat($("class")).$Concat($$(" does not exist ")) ));
};
})
.Method( "export", 9, [{"name":"argument"},{"name":"return","d":"$$(false)"}], function( $, ctx ) {
})
.Method( "__toString", 1, [], function( $, ctx ) {
})
.Create()});

};