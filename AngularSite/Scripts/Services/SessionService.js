var SessionService = function($cookies){
    this.token = undefined;
    
    this.getToken = function(){

        //if no cookie in browser
        if(!$cookies.get("angularWebAppToken")){
            //check local service version
            if(!this.token){
                return undefined;
            }
            //if local exists, set it to browser
            this.setToken(this.token);            
        }
        //return retrieved cookie
        return $cookies.get("angularWebAppToken");
    }
    
    this.setToken = function(token){
        this.token = token;
        $cookies.put("angularWebAppToken", token);
    }
    
    this.apiUrl = 'http://localhost:60716';
}