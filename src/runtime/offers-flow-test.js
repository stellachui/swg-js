/**
 * Copyright 2017 The __PROJECT__ Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ConfiguredRuntime} from './runtime';
import {OffersFlow} from './offers-flow';
import {PageConfig} from '../model/page-config';


describes.realWin('Offers flow', {}, env => {
  let win;
  let offersFlow;
  let runtime;
  let pageConfig;

  beforeEach(() => {
    win = env.win;
    pageConfig = new PageConfig({publicationId: 'pub1', label: 'label1'});
    runtime = new ConfiguredRuntime(win, pageConfig);
    offersFlow = new OffersFlow(runtime);
  });

  it('should have valid OffersFlow constructed', () => {
    const offersPromise = offersFlow.start();
    // TODO(dparikh): Fix unit tests.
    expect(offersPromise).to.eventually.not.be.null;
  });
});