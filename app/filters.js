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

  filters.calculateAverage = function(amount2020, amount2021, amount2022) {
    amount2020 = parseValue(amount2020)
    amount2021 = parseValue(amount2021)
    amount2022 = parseValue(amount2022)
    return ((amount2020 + amount2021 + amount2022) / 3) + ""
  }
  
  filters.calculateDelinkedReduction = function(amount2020, amount2021, amount2022, year) {
    amount2020 = parseValue(amount2020)
    amount2021 = parseValue(amount2021)
    amount2022 = parseValue(amount2022)
    return filters.calculateReduction ((amount2020 + amount2021 + amount2022) / 3 + "", year)
  }
  
  filters.calculateDelinkedReductionTier = function(amount2020, amount2021, amount2022, year, tier) {
    amount2020 = parseValue(amount2020)
    amount2021 = parseValue(amount2021)
    amount2022 = parseValue(amount2022)
    return filters.calculateReductionTier ((amount2020 + amount2021 + amount2022) / 3 + "", year, tier)
  }
  
  filters.calculateDelinkedPayment = function(amount2020, amount2021, amount2022, year) {
    amount2020 = parseValue(amount2020)
    amount2021 = parseValue(amount2021)
    amount2022 = parseValue(amount2022)
    return filters.calculatePayment ((amount2020 + amount2021 + amount2022) / 3 + "", year)
  }

  /* ------------------------------------------------------------------
    Search filter functions
  ------------------------------------------------------------------ */
  filters.formatShortDate = function(dateStr) {
    dateStr = dateStr.replace("/01/", " Jan ")
    dateStr = dateStr.replace("/02/", " Feb ")
    dateStr = dateStr.replace("/03/", " Mar ")
    dateStr = dateStr.replace("/04/", " Apr ")
    dateStr = dateStr.replace("/05/", " May ")
    dateStr = dateStr.replace("/06/", " Jun ")
    dateStr = dateStr.replace("/07/", " Jul ")
    dateStr = dateStr.replace("/08/", " Aug ")
    dateStr = dateStr.replace("/09/", " Sep ")
    dateStr = dateStr.replace("/10/", " Oct ")
    dateStr = dateStr.replace("/11/", " Nov ")
    dateStr = dateStr.replace("/12/", " Dec ")

    dateStr = dateStr.replace("01 ", "1 ")
    dateStr = dateStr.replace("02 ", "2 ")
    dateStr = dateStr.replace("03 ", "3 ")
    dateStr = dateStr.replace("04 ", "4 ")
    dateStr = dateStr.replace("05 ", "5 ")
    dateStr = dateStr.replace("06 ", "6 ")
    dateStr = dateStr.replace("07 ", "7 ")
    dateStr = dateStr.replace("08 ", "8 ")
    dateStr = dateStr.replace("09 ", "9 ")

    return dateStr
}

filters.formatLongDate = function(dateStr) {
    dateStr = dateStr.replace("/01/", " January ")
    dateStr = dateStr.replace("/02/", " February ")
    dateStr = dateStr.replace("/03/", " March ")
    dateStr = dateStr.replace("/04/", " April ")
    dateStr = dateStr.replace("/05/", " May ")
    dateStr = dateStr.replace("/06/", " June ")
    dateStr = dateStr.replace("/07/", " July ")
    dateStr = dateStr.replace("/08/", " August ")
    dateStr = dateStr.replace("/09/", " September ")
    dateStr = dateStr.replace("/10/", " October ")
    dateStr = dateStr.replace("/11/", " November ")
    dateStr = dateStr.replace("/12/", " December ")

    dateStr = dateStr.replace("01 ", "1 ")
    dateStr = dateStr.replace("02 ", "2 ")
    dateStr = dateStr.replace("03 ", "3 ")
    dateStr = dateStr.replace("04 ", "4 ")
    dateStr = dateStr.replace("05 ", "5 ")
    dateStr = dateStr.replace("06 ", "6 ")
    dateStr = dateStr.replace("07 ", "7 ")
    dateStr = dateStr.replace("08 ", "8 ")
    dateStr = dateStr.replace("09 ", "9 ")

    return dateStr
}

filters.registerBadge = function(str) {
    str = str.replace("Protected Designation of Origin (PDO)", '<span class="pdo"><abbr title="Protected Designation of Origin">PDO</abbr></span>')
    str = str.replace("Protected Geographical Indication (PGI)", '<span class="pgi"><abbr title="Protected Geographical Indication">PGI</abbr></span>')
    str = str.replace("Geographical indication (GI)", '<span class="gi"><abbr title="Geographical indication">GI</abbr></span>')
    str = str.replace("Traditional Specialities Guaranteed (TSG)", '<span class="tsg"><abbr title="Traditional Specialities Guaranteed">TSG</abbr></span>')
    return str
}

filters.splitQuery = function(str) {
    items = str.split("?")
    return items[1]
}

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
