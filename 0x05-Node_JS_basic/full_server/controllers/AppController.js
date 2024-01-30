/**
 * Contains the miscellaneous route handlers.
 * @author Richard Mushunje <https://github.com/RichardMushunje>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
