class BaseApiPage {
    get(endpoint) {
      return cy.request({
        method: 'GET',
        url: endpoint,
        failOnStatusCode: false,
      });
    }
  
    post(endpoint, body) {
      return cy.request({
        method: 'POST',
        url: endpoint,
        failOnStatusCode: false,
        body,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    put(endpoint, body) {
      return cy.request({
        method: 'PUT',
        url: endpoint,
        failOnStatusCode: false,
        body,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    delete(endpoint) {
      return cy.request({
        method: 'DELETE',
        url: endpoint,
        failOnStatusCode: false,
      });
    }
  }
  
  export default BaseApiPage;
  