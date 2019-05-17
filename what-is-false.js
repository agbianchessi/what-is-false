/**
 * (c) 2019 Andrea Giovanni Bianchessi
 * MIT Licensed
 * For all details and documentation:
 * https://github.com/agbianchessi/what-is-false
 */

;(function() {
    'use strict' ;

    /**
     * WhatIsFalse constructor
     *
     * @param {Object} options
     * @constructor
     * @api public
     */

    function WhatIsFalse ( options ) {
        this.options = options || {} ;
        this.options.operand =
            this.options.operand === true
            ? true
            : false ;
        this.options.result = this.options.result || WhatIsFalse.ALL ;
        this.options.output = this.options.output === WhatIsFalse.JSON 
                                ? WhatIsFalse.JSON
                                : '' ;
    }

    /*!
     * Static methods
     */

     /**
     * Create an item object to be used for comparison
     *
     * @param {String} name of the item
     * @param {String} string representation of the item
     * @param {} the item itself
     * @return {Object} the item object
     * @api private
     */

    WhatIsFalse._iFactory = function ( name , itemAsString , item ) {
        return {
            name : name ,
            itemAsString : itemAsString ,
            item : item ,
            comparison : '' ,
            result : undefined
        } ;
    }

    /**
     * Create a new instance
     *
     * @param {Object} options
     * @api public
     */

    WhatIsFalse.factory = function( options ) {
        return new WhatIsFalse( options ) ;
    }

    /*!
     * Constants
     */

    WhatIsFalse.ALL                      = "all" ;
    WhatIsFalse.TRUE                     = "true" ;
    WhatIsFalse.FALSE                    = "false" ;
    WhatIsFalse.JSON                     = "json" ;

    WhatIsFalse.OPERANDS                 = {} ;

    WhatIsFalse.OPERANDS.NULL            = WhatIsFalse._iFactory( 'Null' , 'null' , null ) ;
    WhatIsFalse.OPERANDS.UNDEFINED       = WhatIsFalse._iFactory( 'Undefined' , 'undefined' , undefined ) ;
    WhatIsFalse.OPERANDS.NAN             = WhatIsFalse._iFactory( 'NaN' , 'NaN' , NaN ) ;
    WhatIsFalse.OPERANDS.TRUE            = WhatIsFalse._iFactory( 'True' , 'true' , true ) ;
    WhatIsFalse.OPERANDS.FALSE           = WhatIsFalse._iFactory( 'False' , 'false' , false ) ;

    WhatIsFalse.OPERANDS.ARRAYS = [
        WhatIsFalse._iFactory( 'Empty array' , '[]' , [] ) ,
        WhatIsFalse._iFactory( 'Array with 0' , '[ 0 ]' , [ 0 ] ) ,
        WhatIsFalse._iFactory( 'Array with 0.1' , '[ 0.1 ]' , [ 0.1 ] ) ,
        WhatIsFalse._iFactory( 'Array with empty object' , '[ {} ]' , [ {} ] ) ,
        WhatIsFalse._iFactory( 'Array with 0 and 0' , '[ 0 , 0 ]' , [ 0 , 0 ] ) ,
        WhatIsFalse._iFactory( 'Array with string 0' , '[ \'0\' ]' , [ '0' ] ) ,
        WhatIsFalse._iFactory( 'Array with string 0 and string 0' , '[ \'0\' , \'0\' ]' , [ '0' , '0' ] )
    ] ;
              
    WhatIsFalse.OPERANDS.NUMBERS = [
        WhatIsFalse._iFactory( 'Number 0' , '0' , 0 ) ,
        WhatIsFalse._iFactory( 'Number -0' , '-0' , -0 ) ,
        WhatIsFalse._iFactory( 'Number +0' , '+0' , +0 ) ,
        WhatIsFalse._iFactory( 'Number 1' , '1' , 1 ) ,
        WhatIsFalse._iFactory( 'Number -1' , '-1' , -1 ) ,
        WhatIsFalse._iFactory( 'Number 0.1' , '0.1' , 0.1 ) ,
        WhatIsFalse._iFactory( 'Number -0.1' , '-0.1' , -0.1 )
    ] ;
               
    WhatIsFalse.OPERANDS.STRINGS = [
        WhatIsFalse._iFactory( 'Empty String' , '\'\'' , '' ) ,
        WhatIsFalse._iFactory( 'String with 0' , '\'0\'' , '0' ) ,
        WhatIsFalse._iFactory( 'String with double 0' , '\'00\'' , '00' ) ,
        WhatIsFalse._iFactory( 'String with -0' , '\'-0\'' , '-0' ) ,
        WhatIsFalse._iFactory( 'String with +0' , '\'+0\'' , '+0' ) ,
        WhatIsFalse._iFactory( 'String with 0.1' , '\'0.1\'' , '0.1' ) ,
        WhatIsFalse._iFactory( 'String with 1' , '\'1\'' , '1' ) ,
        WhatIsFalse._iFactory( 'String with true' , '\'true\'' , 'true' ) ,
        WhatIsFalse._iFactory( 'String with false' , '\'false\'' , 'false' )
    ] ;

    /*!
     * Instance methods
     */

    /**
     * Produce a listing with comparison results
     *
     * @return {String} formatted comparison results
     * @api public
     */

    WhatIsFalse.prototype.compare =
    WhatIsFalse.prototype.toString = function() {
        var options = this.options ;
        var operand = options.operand === true ? true : false ;
        var only = ( options.result === WhatIsFalse.TRUE || options.result === WhatIsFalse.FALSE )
                    ? options.result
                    : WhatIsFalse.ALL ;
        var output = '----------------------\n'
                    + 'Comparison with: ' + operand + '\n'
                    + '----------------------\n' ;
        output += this._buildLine( WhatIsFalse.OPERANDS.UNDEFINED , only ) ;
        output += this._buildLine( WhatIsFalse.OPERANDS.NULL , only ) ;
        output += this._buildLine( WhatIsFalse.OPERANDS.NAN , only ) ;
        output += this._buildLine( WhatIsFalse.OPERANDS.TRUE , only ) ;
        output += this._buildLine( WhatIsFalse.OPERANDS.FALSE , only ) ;
        WhatIsFalse.OPERANDS.ARRAYS.forEach( function( i ) {
            output += this._buildLine( i , only ) ;
        }.bind( this ) );
        WhatIsFalse.OPERANDS.NUMBERS.forEach( function( i ) {
            output += this._buildLine( i , only ) ;
        }.bind( this ) );
        WhatIsFalse.OPERANDS.STRINGS.forEach( function( i ) {
            output += this._buildLine( i , only ) ;
        }.bind( this ) );

        if(options.output === WhatIsFalse.JSON) 
            return JSON.stringify( WhatIsFalse.OPERANDS , null , ' ' ) ;
        return output;
    }

    /**
     * Check if an item is false using == operator
     *
     * @param {} item to check
     * @return {Boolean} result of the comparison
     * @api private
     */

    WhatIsFalse.prototype._buildLine = function( item , only ) {
        item.comparison = '== ' + this.options.operand ;
        item.result = this.eq2( item.item ) ;
        if( String( item.result ) != only && only !== WhatIsFalse.ALL ) 
            return '' ;
        return '_' + item.name + '\n' 
            + '    ' + item.itemAsString + ' ' 
            + item.comparison + ' '
            + '--> ' + item.result + '\n' ;
    }

    /**
     * Check if an item is false using == operator
     *
     * @param {} item to check
     * @return {Boolean} result of the comparison
     * @api public
     */
     
    WhatIsFalse.prototype.eq2 = function( item ) {
        var result = 
            ( typeof item === 'undefined' )
            ?  false
            :  ( item == this.options.operand ) ;
        return result;
    }

    /**
     * Check if an item is false using === operator
     *
     * @param {} item to check
     * @return {Boolean} result of the comparison
     * @api public
     */
     
    WhatIsFalse.prototype.eq3 = function( item ) {
        var result = 
            ( typeof item === 'undefined' )
            ?  false
            :  ( item === this.options.operand ) ;
        return result;
    }    

    /*!
     * Module exports.
     */

    if ( typeof exports !== 'undefined' ) {
        module.exports = WhatIsFalse;
    } else {
        this.WhatIsFalse = WhatIsFalse;
    }
    
}).call( this );