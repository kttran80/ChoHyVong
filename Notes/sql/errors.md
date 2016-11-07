<!-- TOC insertAnchor:true orderedList:true -->

1. [String or binary data would be truncated](#string-or-binary-data-would-be-truncated)

<!-- /TOC -->

<a id="markdown-string-or-binary-data-would-be-truncated" name="string-or-binary-data-would-be-truncated"></a>
## String or binary data would be truncated
from http://blog.sqlauthority.com/2015/02/14/sql-server-msg-8152-level-16-state-14-string-or-binary-data-would-be-truncated/
I just add
SET ansi_warnings OFF
and check with select statement

