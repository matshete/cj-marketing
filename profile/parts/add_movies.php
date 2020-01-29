                    <!--=====================================
                      MODAL  ADD MOVIES
                      ======================================-->
                    <div class="modal fade" id="add_movies" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                               <div class="form-group show-progress"> </div><br>
                               <div class="modal-header">
                                
                                   <div><h5 class="modal-title">Add Movies</h5></div>
                                  
                                   <button type="button" class="close" data-dismiss="modal" aria-label="close">
                                       <span aria-hidden="true">&times;</span>
                                   </button>
                               </div><!-- modal-header --> 
                               <div class="modal-body">
                                   <form action="">
                                       <div class="form-group">
                                         <input type="text" class="form-control profile-input" id="movie_title" placeholder="Add Movie Title..." value="<?php if(isset($title)): echo $title; endif; ?>">
                                         <div class="title-error error"></div>
                                       </div><!-- form-group -->

                                         <div class="form-group">
                                         <input type="text" class="form-control profile-input" id="movie_duration" placeholder="Add Movie Duration...E.g 01:45" value="<?php if(isset($duration)): echo $duration; endif; ?>">
                                         <div class="duration-error error"></div>
                                       </div><!-- form-group -->

                                       <div class="form-group">
                                          <select class="form-control input-lg" name="rating"  id="movie_rating">

                                            <option value="">Select Rating</option>
                                            <option value="1">1</option>
                                             <option value="2">2</option>
                                              <option value="3">3</option>
                                               <option value="4">4</option>
                                                <option value="5">5</option>
                                          </select>
                                          <div class="rating-error error"></div>
                                      </div>
                                       <div class="modal-footer">
                                           <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                           <button type="button" id="submit" class="btn btn-success">Save Movie</button>
                                            
                                       </div><!-- modal-footer -->
                                   </form>
                               </div><!-- modal-body -->
                            </div><!-- modal-content -->
                            
                        </div><!-- modal-dialog -->
                        
                    </div><!-- modal -->

                                        <!--=====================================
                      MODAL  EDIT MOVIES
                      ======================================-->
                    <div class="modal fade" id="edit_Movies" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                               <div class="form-group show-progress"> </div><br>
                               <div class="modal-header">
                                
                                   <div><h5 class="modal-title">Edit Movies</h5></div>
                                  
                                   <button type="button" class="close" data-dismiss="modal" aria-label="close">
                                       <span aria-hidden="true">&times;</span>
                                   </button>
                               </div><!-- modal-header --> 
                               <div class="modal-body">
                                   <form action="">
                                       <div class="form-group">
                                         <input type="text" class="form-control profile-input" id="edit_title" placeholder="Edit Movie Title..." value="<?php if(isset($title)): echo $title; endif; ?>">
                                         <div class="title-error error"></div>
                                       </div><!-- form-group -->

                                         <div class="form-group">
                                         <input type="text" class="form-control profile-input" id="edit_duration" placeholder="Edit Movie Duration..." value="<?php if(isset($duration)): echo $duration; endif; ?>">
                                         <div class="duration-error error"></div>
                                       </div><!-- form-group -->

                                         <div class="form-group">
                                          <select class="form-control input-lg" name="rating"  id="edit_rating">

                                            <option value="">Select Rating</option>
                                            <option value="1">1</option>
                                             <option value="2">2</option>
                                              <option value="3">3</option>
                                               <option value="4">4</option>
                                                <option value="5">5</option>
                                          </select>
                                          <div class="rating-error error"></div>
                                      </div>
                                       <div class="modal-footer">
                                           <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                           <input type="hidden" name="movieId" id="movieId" value="<?php if(isset($movieId)): echo $movieId; endif; ?>">
                                           <button type="button" id="submit" class="btn btn-success" onclick="update_movie(this.form.movieId.value,this.form.edit_title.value,this.form.edit_duration.value,this.form.edit_rating.value);">Save Movie</button>
                                            
                                       </div><!-- modal-footer -->
                                   </form>
                               </div><!-- modal-body -->
                            </div><!-- modal-content -->
                            
                        </div><!-- modal-dialog -->
                        
                    </div><!-- modal -->