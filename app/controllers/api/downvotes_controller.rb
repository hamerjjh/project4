class Api::DownvotesController < ApplicationController
    def create
        @downvote = Downvote.create!(downvote_params)
    
        render json: @downvote
      end

      private

      
      def downvote_params
          params.require(:downvote).permit(:user_id, :post_id)
      end
end
