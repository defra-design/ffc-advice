module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    Progressive reduction calculator functions
  ------------------------------------------------------------------ */

  var limits = {
    '<30': { min: 0, max: 30000, '2021': 0.05, '2022': 0.2, '2023': 0.35, '2024': 0.5 },	
    '30-50': { min: 30000, max: 50000, '2021': 0.1, '2022': 0.25, '2023': 0.4, '2024': 0.55 },
    '50-150': { min: 50000, max: 150000, '2021': 0.2, '2022': 0.35, '2023': 0.5, '2024': 0.65 },
    '>150': { min: 150000, max: Infinity, '2021': 0.25, '2022': 0.4, '2023': 0.55, '2024': 0.7 },
  
  }
  
  var doCalc = function (amount, year, tier) {
    return (Math.min(Math.max(amount, limits[tier].min), limits[tier].max) - limits[tier].min) * limits[tier][year]
  }
  
  var parseValue = function (amount) {
    amount = amount.replace(/[^0-9.-]+/g,"") // Remove anything not a digit or decimal point
    return parseFloat(amount) // Convert into a number
  }
  
  var formatValue = function (amount) {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'GBP'
    });
  
    return formatter.format(amount) // Format as currency
  }

  filters.getFormattedValue = function (amount) {
    amount = parseValue(amount)
    return formatValue(amount)
  }
  
  filters.calculateReduction = function(totalAmount, year) {
    totalAmount = parseValue(totalAmount)
    totalAmount = doCalc(totalAmount, year, '<30') 
    + doCalc(totalAmount, year, '30-50') 
    + doCalc(totalAmount, year, '50-150') 
    + doCalc(totalAmount, year, '>150') // Apply reduction
    return formatValue(totalAmount)
  }
  
  filters.calculateReductionTier = function(totalAmount, year, tier) {
    totalAmount = parseValue(totalAmount)
    totalAmount = doCalc (totalAmount, year, tier) // Apply reduction
    return formatValue(totalAmount)
  }
  
  filters.calculatePayment = function(totalAmount, year) {
    totalAmount = parseValue(totalAmount)
    totalAmount = totalAmount - (doCalc(totalAmount, year, '<30') 
      + doCalc(totalAmount, year, '30-50') 
      + doCalc(totalAmount, year, '50-150') 
      + doCalc(totalAmount, year, '>150')) // Apply reduction
    return formatValue(totalAmount)
  }

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
