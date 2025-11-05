public with sharing class weatherAppController {
    
   @AuraEnabled(cacheable=true)
public static String getWeatherDetails(String input) {
    String url = 'https://api.openweathermap.org/data/2.5/weather?q=' + input +
                 '&units=metric' + getKey();
    String response = getResponse(url);
    return response;
}


   
    public static String getResponse(String url) {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(url);
        request.setMethod('GET');

        try {
            HttpResponse response = http.send(request);
            if (response.getStatusCode() == 200) {
                return response.getBody();
            } else {
                System.debug('Error: ' + response.getStatusCode());
                return null;
            }
        } catch (Exception e) {
            System.debug('Exception: ' + e.getMessage());
            return null;
        }
    }

   
    public static String getKey() {
        String apiKey = 'a23f058692a2492bcd3a0c74d479c2d9';
        return '&appid=' + apiKey;
    }
}
