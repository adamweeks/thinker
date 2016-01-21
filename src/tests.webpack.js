import 'angular';
import 'angular-mocks/angular-mocks';

var testsContext = require.context(".", true, /.test$/);
testsContext.keys().forEach(testsContext);