/*global
    document, NodeFilter, NodeIterator, atob
 */
'use strict';
/*
 You need to find all values of attribute named "base64" in bizzare.html.
 After that make one long string and decode it. Mind the name of attribute. Follow instructions.
*/

function parseContent() {
    var i,
        concatenatedAttributeValues = '',
        elementsWithBase64 = document.querySelectorAll('[base64]');

    for (i = 0; i < elementsWithBase64.length; i += 1) {
        concatenatedAttributeValues += elementsWithBase64[i].getAttribute('base64');
    }

    return atob(concatenatedAttributeValues);
}

function concatComments() {
    var concatenatedComments = '',
        currentNode,
        nodeIterator = document.createNodeIterator(
            document.body,
            NodeFilter.SHOW_COMMENT,
            NodeFilter.FILTER_ACCEPT,
            false
        );

    while ((currentNode = nodeIterator.nextNode())) {
        concatenatedComments += currentNode.nodeValue;
    }

    return concatenatedComments;
}