/*
 *   Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import { PropertySchema } from './property';
import { PropNumber } from './propNumber';
import { PropObject } from './propObject';
import { ShapeProp } from './shapeProp';
import { PropString } from './propString';

export class Shape extends PropObject {
  constructor(tag: string, extName: string, parent?: PropertySchema) {
    super(tag, extName, parent);
    this.subPropSchemas = new Map<string, PropertySchema>([
      ['k', new ShapeProp(this)],
      ['x', new PropString('x', 'Expression', this)],
      ['ix', new PropString('ix', 'Property Index', this)],
      ['a', new PropNumber('a', 'Animated', this)]
    ]);
  }
}
